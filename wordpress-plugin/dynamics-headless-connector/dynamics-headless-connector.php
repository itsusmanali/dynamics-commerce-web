<?php
/**
 * Plugin Name: Dynamics Headless Connector
 * Description: Connects WordPress to the Dynamics Commerce Next.js frontend with previews, cache revalidation, and connection checks.
 * Version: 2.1.0
 * Requires at least: 6.5
 * Requires PHP: 8.0
 * Author: Lumovy
 * License: GPL-2.0-or-later
 * Text Domain: dynamics-headless
 */

if (!defined('ABSPATH')) {
    exit;
}

final class Dynamics_Headless_Connector
{
    private const OPTION = 'dynamics_headless_settings';
    private const PAGE = 'dynamics-headless';
    private const MANIFEST_OPTION = 'dynamics_module_manifest';
    private const SYNC_OPTION = 'dynamics_module_sync_status';
    private const SYNC_HOOK = 'dynamics_module_manifest_sync';

    public static function boot(): void
    {
        register_activation_hook(__FILE__, [self::class, 'activate']);
        register_deactivation_hook(__FILE__, [self::class, 'deactivate']);
        add_filter('cron_schedules', [self::class, 'cron_schedules']);
        add_action(self::SYNC_HOOK, [self::class, 'sync_modules']);
        add_action('init', [self::class, 'ensure_sync_schedule'], 1);
        add_action('admin_menu', [self::class, 'admin_menu']);
        add_action('admin_init', [self::class, 'register_settings']);
        add_action('init', [self::class, 'register_composition_types']);
        add_action('enqueue_block_editor_assets', [self::class, 'enqueue_module_editor']);
        add_action('add_meta_boxes_page', [self::class, 'add_template_meta_box']);
        add_action('save_post_page', [self::class, 'save_page_template']);
        add_action('add_meta_boxes_dynamics_template', [self::class, 'add_template_settings_meta_box']);
        add_action('save_post_dynamics_template', [self::class, 'save_template_settings']);
        add_action('save_post_dynamics_fragment', [self::class, 'composition_changed']);
        add_action('save_post_dynamics_template', [self::class, 'composition_changed']);
        add_action('update_option_' . self::OPTION, [self::class, 'composition_settings_changed'], 10, 3);
        add_action('admin_post_dynamics_headless_test', [self::class, 'test_connection']);
        add_action('admin_post_dynamics_modules_sync', [self::class, 'manual_module_sync']);
        add_action('transition_post_status', [self::class, 'content_changed'], 10, 3);
        add_action('post_updated', [self::class, 'published_content_updated'], 10, 3);
        add_action('created_term', [self::class, 'taxonomy_changed']);
        add_action('edited_term', [self::class, 'taxonomy_changed']);
        add_action('delete_term', [self::class, 'taxonomy_changed']);
        add_filter('preview_post_link', [self::class, 'preview_link'], 10, 2);
        add_filter('the_content', [self::class, 'rewrite_content_links'], 20);
        add_action('graphql_register_types', [self::class, 'register_graphql_fields']);
    }

    public static function activate(): void
    {
        $settings = self::settings();
        $settings['revalidation_secret'] = $settings['revalidation_secret'] ?: wp_generate_password(48, false, false);
        $settings['preview_secret'] = $settings['preview_secret'] ?: wp_generate_password(48, false, false);
        update_option(self::OPTION, $settings, false);
        self::ensure_sync_schedule();
    }

    public static function deactivate(): void
    {
        wp_clear_scheduled_hook(self::SYNC_HOOK);
    }

    public static function cron_schedules(array $schedules): array
    {
        $schedules['dynamics_five_minutes'] = ['interval' => 300, 'display' => __('Every five minutes', 'dynamics-headless')];
        return $schedules;
    }

    public static function ensure_sync_schedule(): void
    {
        if (!wp_next_scheduled(self::SYNC_HOOK)) wp_schedule_event(time() + 60, 'dynamics_five_minutes', self::SYNC_HOOK);
    }

    private static function settings(): array
    {
        return wp_parse_args(get_option(self::OPTION, []), [
            'frontend_url' => 'https://dynamics-commerce-web.vercel.app',
            'revalidation_secret' => '',
            'preview_secret' => '',
            'redirects' => '',
            'header_fragment' => 0,
            'footer_fragment' => 0,
        ]);
    }

    public static function admin_menu(): void
    {
        add_options_page(
            __('Headless Frontend', 'dynamics-headless'),
            __('Headless Frontend', 'dynamics-headless'),
            'manage_options',
            self::PAGE,
            [self::class, 'settings_page']
        );
    }

    public static function register_settings(): void
    {
        register_setting('dynamics_headless', self::OPTION, [
            'type' => 'array',
            'sanitize_callback' => [self::class, 'sanitize_settings'],
        ]);
    }

    public static function sanitize_settings($input): array
    {
        $current = self::settings();
        $frontend = untrailingslashit(esc_url_raw($input['frontend_url'] ?? ''));

        if (!$frontend || !wp_http_validate_url($frontend)) {
            add_settings_error(self::OPTION, 'invalid_frontend', __('Enter a valid HTTPS frontend URL.', 'dynamics-headless'));
            $frontend = $current['frontend_url'];
        }

        return [
            'frontend_url' => $frontend,
            'revalidation_secret' => sanitize_text_field($input['revalidation_secret'] ?? $current['revalidation_secret']),
            'preview_secret' => sanitize_text_field($input['preview_secret'] ?? $current['preview_secret']),
            'redirects' => self::sanitize_redirects($input['redirects'] ?? ''),
            'header_fragment' => absint($input['header_fragment'] ?? 0),
            'footer_fragment' => absint($input['footer_fragment'] ?? 0),
        ];
    }

    private static function sanitize_redirects(string $value): string
    {
        $valid = [];
        foreach (preg_split('/\R/', $value) ?: [] as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#')) {
                continue;
            }
            if (preg_match('#^(/[^\s]*)\s*(?:=>|\s)\s*(/[^\s]*)$#', $line, $matches) && $matches[1] !== $matches[2]) {
                $valid[$matches[1]] = $matches[2];
            }
        }
        return implode("\n", array_map(static fn(string $from, string $to): string => $from . ' => ' . $to, array_keys($valid), $valid));
    }

    public static function settings_page(): void
    {
        if (!current_user_can('manage_options')) {
            return;
        }

        $settings = self::settings();
        $graphql_ok = class_exists('WPGraphQL') || function_exists('graphql');
        $yoast_ok = defined('WPSEO_VERSION');
        $notice = sanitize_key($_GET['dynamics_status'] ?? '');
        $fragments = get_posts(['post_type' => 'dynamics_fragment', 'post_status' => 'publish', 'numberposts' => -1, 'orderby' => 'title', 'order' => 'ASC']);
        $sync = wp_parse_args(get_option(self::SYNC_OPTION, []), ['state' => 'never', 'hash' => '', 'lastSuccess' => 0, 'lastAttempt' => 0, 'error' => '']);
        ?>
        <div class="wrap">
            <h1><?php esc_html_e('Dynamics Headless Frontend', 'dynamics-headless'); ?></h1>
            <p><?php esc_html_e('Publish in WordPress as usual. This connector handles previews and tells the Next.js site when content changes.', 'dynamics-headless'); ?></p>
            <?php if ($notice === 'success') : ?><div class="notice notice-success"><p><?php esc_html_e('Connection successful. WordPress, GraphQL, and Next.js agree.', 'dynamics-headless'); ?></p></div><?php endif; ?>
            <?php if ($notice === 'failed') : ?><div class="notice notice-error"><p><?php esc_html_e('Connection failed. Confirm the Vercel environment variables and deploy the latest frontend.', 'dynamics-headless'); ?></p></div><?php endif; ?>
            <?php if ($notice === 'sync-success') : ?><div class="notice notice-success"><p><?php esc_html_e('Module definitions synchronized.', 'dynamics-headless'); ?></p></div><?php endif; ?>
            <?php if ($notice === 'sync-failed') : ?><div class="notice notice-error"><p><?php esc_html_e('Module synchronization failed. The last working manifest is still active.', 'dynamics-headless'); ?></p></div><?php endif; ?>
            <table class="widefat striped" style="max-width:760px;margin:20px 0">
                <tbody>
                    <tr><td><strong>WPGraphQL</strong></td><td><?php echo $graphql_ok ? '✅ Active' : '❌ Missing'; ?></td></tr>
                    <tr><td><strong>Yoast SEO</strong></td><td><?php echo $yoast_ok ? '✅ Active' : '❌ Missing'; ?></td></tr>
                    <tr><td><strong>GraphQL endpoint</strong></td><td><code><?php echo esc_html(home_url('/graphql')); ?></code></td></tr>
                    <tr><td><strong>Module synchronization</strong></td><td><?php echo $sync['state'] === 'success' ? '✅' : ($sync['state'] === 'error' ? '⚠️' : '◌'); ?> <?php echo $sync['lastSuccess'] ? esc_html(sprintf('Last successful sync: %s', wp_date('Y-m-d H:i:s', (int) $sync['lastSuccess']))) : esc_html__('Using bundled manifest', 'dynamics-headless'); ?><?php if ($sync['error']) : ?><br><small><?php echo esc_html($sync['error']); ?></small><?php endif; ?></td></tr>
                    <tr><td><strong>Manifest hash</strong></td><td><code><?php echo esc_html($sync['hash'] ? substr($sync['hash'], 0, 16) : 'bundled'); ?></code></td></tr>
                </tbody>
            </table>
            <form method="post" action="options.php">
                <?php settings_fields('dynamics_headless'); ?>
                <table class="form-table"><tbody>
                    <tr><th><label for="dh_frontend">Frontend URL</label></th><td><input class="regular-text" id="dh_frontend" type="url" name="<?php echo esc_attr(self::OPTION); ?>[frontend_url]" value="<?php echo esc_attr($settings['frontend_url']); ?>" required><p class="description">Your public Vercel URL, without a trailing slash.</p></td></tr>
                    <tr><th><label for="dh_revalidate">Revalidation secret</label></th><td><input class="large-text code" id="dh_revalidate" type="text" name="<?php echo esc_attr(self::OPTION); ?>[revalidation_secret]" value="<?php echo esc_attr($settings['revalidation_secret']); ?>" autocomplete="off"><p class="description">Copy this to Vercel as <code>WORDPRESS_REVALIDATION_SECRET</code>.</p></td></tr>
                    <tr><th><label for="dh_preview">Preview secret</label></th><td><input class="large-text code" id="dh_preview" type="text" name="<?php echo esc_attr(self::OPTION); ?>[preview_secret]" value="<?php echo esc_attr($settings['preview_secret']); ?>" autocomplete="off"><p class="description">Copy this to Vercel as <code>WORDPRESS_PREVIEW_SECRET</code>.</p></td></tr>
                    <tr><th><label for="dh_redirects">Permanent redirects</label></th><td><textarea class="large-text code" id="dh_redirects" rows="7" name="<?php echo esc_attr(self::OPTION); ?>[redirects]" placeholder="/old-page => /new-page"><?php echo esc_textarea($settings['redirects']); ?></textarea><p class="description">One internal 308 redirect per line, for example <code>/old-page =&gt; /new-page</code>.</p></td></tr>
                    <tr><th><label for="dh_header_fragment">Global header fragment</label></th><td><select id="dh_header_fragment" name="<?php echo esc_attr(self::OPTION); ?>[header_fragment]"><option value="0">Use code default</option><?php foreach ($fragments as $fragment) : ?><option value="<?php echo esc_attr($fragment->ID); ?>" <?php selected($settings['header_fragment'], $fragment->ID); ?>><?php echo esc_html($fragment->post_title); ?></option><?php endforeach; ?></select></td></tr>
                    <tr><th><label for="dh_footer_fragment">Global footer fragment</label></th><td><select id="dh_footer_fragment" name="<?php echo esc_attr(self::OPTION); ?>[footer_fragment]"><option value="0">Use code default</option><?php foreach ($fragments as $fragment) : ?><option value="<?php echo esc_attr($fragment->ID); ?>" <?php selected($settings['footer_fragment'], $fragment->ID); ?>><?php echo esc_html($fragment->post_title); ?></option><?php endforeach; ?></select></td></tr>
                </tbody></table>
                <?php submit_button(__('Save connection', 'dynamics-headless')); ?>
            </form>
            <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                <input type="hidden" name="action" value="dynamics_headless_test">
                <?php wp_nonce_field('dynamics_headless_test'); ?>
                <?php submit_button(__('Test connection', 'dynamics-headless'), 'secondary', 'submit', false); ?>
            </form>
            <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" style="display:inline-block;margin-left:10px">
                <input type="hidden" name="action" value="dynamics_modules_sync">
                <?php wp_nonce_field('dynamics_modules_sync'); ?>
                <?php submit_button(__('Sync modules now', 'dynamics-headless'), 'secondary', 'submit', false); ?>
            </form>
        </div>
        <?php
    }

    public static function test_connection(): void
    {
        check_admin_referer('dynamics_headless_test');
        if (!current_user_can('manage_options')) {
            wp_die(esc_html__('You are not allowed to do that.', 'dynamics-headless'));
        }
        $settings = self::settings();
        $response = wp_remote_post($settings['frontend_url'] . '/api/integration/health', [
            'timeout' => 15,
            'headers' => ['Content-Type' => 'application/json', 'X-WordPress-Secret' => $settings['revalidation_secret']],
            'body' => wp_json_encode(['wordpressUrl' => home_url()]),
        ]);
        $success = !is_wp_error($response) && wp_remote_retrieve_response_code($response) === 200;
        wp_safe_redirect(add_query_arg('dynamics_status', $success ? 'success' : 'failed', admin_url('options-general.php?page=' . self::PAGE)));
        exit;
    }

    public static function manual_module_sync(): void
    {
        check_admin_referer('dynamics_modules_sync');
        if (!current_user_can('manage_options')) wp_die(esc_html__('You are not allowed to do that.', 'dynamics-headless'));
        $success = self::sync_modules();
        wp_safe_redirect(add_query_arg('dynamics_status', $success ? 'sync-success' : 'sync-failed', admin_url('options-general.php?page=' . self::PAGE)));
        exit;
    }

    public static function sync_modules(): bool
    {
        $settings = self::settings();
        $status = wp_parse_args(get_option(self::SYNC_OPTION, []), ['state' => 'never', 'hash' => '', 'lastSuccess' => 0, 'lastAttempt' => 0, 'error' => '']);
        $status['lastAttempt'] = time();
        if (!$settings['frontend_url'] || !$settings['revalidation_secret']) return self::sync_failed($status, __('Frontend URL or secret is missing.', 'dynamics-headless'));
        $response = wp_remote_get($settings['frontend_url'] . '/api/modules/manifest', [
            'timeout' => 15,
            'headers' => ['Accept' => 'application/json', 'X-WordPress-Secret' => $settings['revalidation_secret']],
        ]);
        if (is_wp_error($response)) return self::sync_failed($status, $response->get_error_message());
        if (wp_remote_retrieve_response_code($response) !== 200) return self::sync_failed($status, sprintf(__('Frontend returned HTTP %d.', 'dynamics-headless'), wp_remote_retrieve_response_code($response)));
        $payload = json_decode(wp_remote_retrieve_body($response), true);
        if (!is_array($payload) || ($payload['schemaVersion'] ?? 0) !== 1 || !is_array($payload['modules'] ?? null) || !preg_match('/^[a-f0-9]{64}$/', (string) ($payload['hash'] ?? ''))) return self::sync_failed($status, __('Frontend returned an invalid module manifest.', 'dynamics-headless'));
        foreach ($payload['modules'] as $definition) if (!is_array($definition) || !preg_match('/^[a-z][a-z0-9-]*$/', (string) ($definition['name'] ?? '')) || !is_array($definition['config'] ?? null) || !is_array($definition['resources'] ?? null)) return self::sync_failed($status, __('A module definition failed validation.', 'dynamics-headless'));
        update_option(self::MANIFEST_OPTION, ['hash' => $payload['hash'], 'modules' => $payload['modules']], false);
        update_option(self::SYNC_OPTION, ['state' => 'success', 'hash' => $payload['hash'], 'lastSuccess' => time(), 'lastAttempt' => time(), 'error' => ''], false);
        return true;
    }

    private static function sync_failed(array $status, string $error): bool
    {
        $status['state'] = 'error';
        $status['error'] = sanitize_text_field($error);
        update_option(self::SYNC_OPTION, $status, false);
        return false;
    }

    public static function content_changed(string $new_status, string $old_status, WP_Post $post): void
    {
        if ($new_status === 'publish' && $old_status !== 'publish') {
            self::notify_frontend($post);
        }
    }

    public static function published_content_updated(int $post_id, WP_Post $after, WP_Post $before): void
    {
        if ($after->post_status === 'publish' && $before->post_status === 'publish' && $after->post_modified_gmt !== $before->post_modified_gmt) {
            self::notify_frontend($after);
        }
    }

    public static function taxonomy_changed(): void
    {
        self::notify_frontend(null);
    }

    public static function composition_changed(int $post_id): void
    {
        if (!wp_is_post_revision($post_id)) self::notify_frontend(null);
    }

    public static function composition_settings_changed(): void
    {
        wp_schedule_single_event(time() + 1, self::SYNC_HOOK);
        self::notify_frontend(null);
    }

    private static function notify_frontend(?WP_Post $post): void
    {
        if ($post && (wp_is_post_revision($post) || !in_array($post->post_type, ['post', 'page'], true))) {
            return;
        }
        $settings = self::settings();
        if (!$settings['frontend_url'] || !$settings['revalidation_secret']) {
            return;
        }
        $payload = $post ? [
            'slug' => $post->post_type === 'page' ? get_page_uri($post) : $post->post_name,
            'type' => $post->post_type,
        ] : [];
        wp_remote_post($settings['frontend_url'] . '/api/revalidate', [
            'blocking' => false,
            'timeout' => 0.01,
            'headers' => ['Content-Type' => 'application/json', 'X-WordPress-Secret' => $settings['revalidation_secret']],
            'body' => wp_json_encode($payload),
        ]);
    }

    public static function preview_link(string $url, WP_Post $post): string
    {
        $settings = self::settings();
        if (!$settings['frontend_url'] || !$settings['preview_secret']) {
            return $url;
        }
        return add_query_arg([
            'secret' => $settings['preview_secret'],
            'type' => $post->post_type === 'post' ? 'post' : 'page',
            'id' => $post->ID,
        ], $settings['frontend_url'] . '/api/draft');
    }

    public static function rewrite_content_links(string $content): string
    {
        $settings = self::settings();
        if (!$settings['frontend_url']) {
            return $content;
        }
        $wordpress_host = preg_quote(untrailingslashit(home_url()), '#');
        return preg_replace_callback(
            '#(<a\b[^>]*\bhref=["\'])' . $wordpress_host . '([^"\']*)(["\'])#i',
            static fn(array $match): string => $match[1] . $settings['frontend_url'] . $match[2] . $match[3],
            $content
        ) ?? $content;
    }

    public static function register_graphql_fields(): void
    {
        if (!function_exists('register_graphql_field')) {
            return;
        }
        register_graphql_field('RootQuery', 'dynamicsPreview', [
            'type' => 'String',
            'description' => __('Secure preview payload for the Dynamics frontend.', 'dynamics-headless'),
            'args' => [
                'id' => ['type' => ['non_null' => 'ID']],
                'secret' => ['type' => ['non_null' => 'String']],
            ],
            'resolve' => static function ($root, array $args): ?string {
                $settings = self::settings();
                if (!$settings['preview_secret'] || !hash_equals($settings['preview_secret'], (string) $args['secret'])) {
                    throw new \GraphQL\Error\UserError(__('Invalid preview secret.', 'dynamics-headless'));
                }
                $post = get_post(absint($args['id']));
                if (!$post || !in_array($post->post_type, ['post', 'page'], true)) {
                    return null;
                }
                return wp_json_encode([
                    'databaseId' => $post->ID,
                    'slug' => $post->post_name,
                    'uri' => get_page_uri($post),
                    'title' => apply_filters('the_title', $post->post_title, $post->ID),
                    'content' => apply_filters('the_content', $post->post_content),
                    'excerpt' => apply_filters('the_excerpt', $post->post_excerpt),
                    'date' => get_post_time(DATE_W3C, true, $post),
                    'modified' => get_post_modified_time(DATE_W3C, true, $post),
                    'type' => $post->post_type,
                ]);
            },
        ]);
        register_graphql_field('RootQuery', 'dynamicsRedirects', [
            'type' => 'String',
            'description' => __('Public permanent redirect rules for the Dynamics frontend.', 'dynamics-headless'),
            'resolve' => static function (): string {
                $rules = [];
                foreach (preg_split('/\R/', self::settings()['redirects']) ?: [] as $line) {
                    if (preg_match('#^(/[^\s]*)\s*=>\s*(/[^\s]*)$#', trim($line), $matches)) {
                        $rules[] = ['from' => $matches[1], 'to' => $matches[2]];
                    }
                }
                return wp_json_encode($rules);
            },
        ]);
        foreach (['Page', 'Post'] as $type) {
            register_graphql_field($type, 'dynamicsModules', [
                'type' => 'String',
                'description' => __('Resolved Dynamics module composition.', 'dynamics-headless'),
                'resolve' => static fn($source): string => wp_json_encode(self::composition_for_post((int) ($source->databaseId ?? $source->ID ?? 0))),
            ]);
        }
        register_graphql_field('Page', 'dynamicsTemplateSettings', [
            'type' => 'String',
            'resolve' => static function ($source): string {
                $page_id = (int) ($source->databaseId ?? $source->ID ?? 0);
                return wp_json_encode(self::template_settings((int) get_post_meta($page_id, '_dynamics_template_id', true)));
            },
        ]);
        register_graphql_field('RootQuery', 'dynamicsGlobals', [
            'type' => 'String',
            'resolve' => static function (): string {
                $settings = self::settings();
                return wp_json_encode([
                    'header' => self::composition_for_post((int) $settings['header_fragment'], false),
                    'footer' => self::composition_for_post((int) $settings['footer_fragment'], false),
                ]);
            },
        ]);
    }

    private static function module_definitions(): array
    {
        $remote = get_option(self::MANIFEST_OPTION, []);
        if (is_array($remote) && is_array($remote['modules'] ?? null) && $remote['modules']) return $remote['modules'];
        $path = plugin_dir_path(__FILE__) . 'modules-manifest.json';
        if (!is_readable($path)) {
            return [];
        }
        $definitions = json_decode((string) file_get_contents($path), true);
        return is_array($definitions) ? $definitions : [];
    }

    public static function register_composition_types(): void
    {
        register_post_type('dynamics_fragment', [
            'labels' => ['name' => __('Module Fragments', 'dynamics-headless'), 'singular_name' => __('Module Fragment', 'dynamics-headless')],
            'public' => false, 'show_ui' => true, 'show_in_menu' => true, 'show_in_rest' => true,
            'supports' => ['title', 'editor', 'revisions'], 'menu_icon' => 'dashicons-screenoptions',
        ]);
        register_post_type('dynamics_template', [
            'labels' => ['name' => __('Page Templates', 'dynamics-headless'), 'singular_name' => __('Page Template', 'dynamics-headless')],
            'public' => false, 'show_ui' => true, 'show_in_menu' => true, 'show_in_rest' => true,
            'supports' => ['title', 'editor', 'revisions'], 'menu_icon' => 'dashicons-layout',
        ]);
        foreach (self::module_definitions() as $definition) {
            $name = sanitize_key($definition['name'] ?? '');
            if (!$name) continue;
            register_block_type('dynamics/' . $name, [
                'api_version' => 3,
                'attributes' => [
                    'moduleId' => ['type' => 'string'],
                    'config' => ['type' => 'object', 'default' => new stdClass()],
                    'resources' => ['type' => 'object', 'default' => new stdClass()],
                    'locale' => ['type' => 'string', 'default' => 'en'],
                ],
                'render_callback' => static fn(array $attributes): string => '<div data-dynamics-module="' . esc_attr($name) . '"></div>',
            ]);
        }
        register_block_type('dynamics/fragment', [
            'api_version' => 3,
            'attributes' => ['fragmentId' => ['type' => 'number', 'default' => 0]],
            'render_callback' => static fn(): string => '',
        ]);
    }

    public static function enqueue_module_editor(): void
    {
        $sync = wp_parse_args(get_option(self::SYNC_OPTION, []), ['lastAttempt' => 0]);
        if ((int) $sync['lastAttempt'] < time() - 300) self::sync_modules();
        wp_enqueue_script('dynamics-module-editor', plugins_url('module-editor.js', __FILE__), ['wp-blocks', 'wp-element', 'wp-components', 'wp-block-editor', 'wp-i18n'], '2.0.0', true);
        $fragments = array_map(static fn(WP_Post $post): array => ['label' => $post->post_title, 'value' => $post->ID], get_posts(['post_type' => 'dynamics_fragment', 'post_status' => 'publish', 'numberposts' => -1]));
        wp_localize_script('dynamics-module-editor', 'DynamicsModuleEditor', ['definitions' => self::module_definitions(), 'fragments' => $fragments, 'defaultLocale' => substr(get_locale(), 0, 2)]);
    }

    public static function add_template_meta_box(): void
    {
        add_meta_box('dynamics-page-template', __('Dynamics Page Template', 'dynamics-headless'), [self::class, 'render_template_meta_box'], 'page', 'side');
    }

    public static function render_template_meta_box(WP_Post $post): void
    {
        wp_nonce_field('dynamics_page_template', 'dynamics_page_template_nonce');
        $selected = (int) get_post_meta($post->ID, '_dynamics_template_id', true);
        $templates = get_posts(['post_type' => 'dynamics_template', 'post_status' => 'publish', 'numberposts' => -1]);
        echo '<select name="dynamics_template_id" style="width:100%"><option value="0">' . esc_html__('No shared template', 'dynamics-headless') . '</option>';
        foreach ($templates as $template) echo '<option value="' . esc_attr($template->ID) . '" ' . selected($selected, $template->ID, false) . '>' . esc_html($template->post_title) . '</option>';
        echo '</select><p>' . esc_html__('Template modules render before page modules.', 'dynamics-headless') . '</p>';
    }

    public static function save_page_template(int $post_id): void
    {
        if (!isset($_POST['dynamics_page_template_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['dynamics_page_template_nonce'])), 'dynamics_page_template') || !current_user_can('edit_post', $post_id)) return;
        update_post_meta($post_id, '_dynamics_template_id', absint($_POST['dynamics_template_id'] ?? 0));
    }

    public static function add_template_settings_meta_box(): void
    {
        add_meta_box('dynamics-template-settings', __('Frontend Template Settings', 'dynamics-headless'), [self::class, 'render_template_settings_meta_box'], 'dynamics_template', 'normal', 'high');
    }

    public static function render_template_settings_meta_box(WP_Post $post): void
    {
        wp_nonce_field('dynamics_template_settings', 'dynamics_template_settings_nonce');
        $settings = self::template_settings($post->ID);
        echo '<p><label><strong>' . esc_html__('Content wrapper class', 'dynamics-headless') . '</strong></label><br><input class="widefat code" name="dynamics_body_class" value="' . esc_attr($settings['bodyClass']) . '" placeholder="theme-enterprise landing-page"></p>';
        echo '<p><label><strong>' . esc_html__('Custom meta tags (JSON)', 'dynamics-headless') . '</strong></label><br><textarea class="widefat code" rows="6" name="dynamics_custom_meta">' . esc_textarea(wp_json_encode($settings['customMeta'], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)) . '</textarea></p>';
        echo '<p><label><strong>' . esc_html__('Allowlisted script IDs', 'dynamics-headless') . '</strong></label><br><input class="widefat code" name="dynamics_script_ids" value="' . esc_attr(implode(', ', $settings['scripts'])) . '" placeholder="support-widget, product-analytics"></p>';
        echo '<p class="description">' . esc_html__('Scripts render only when the same ID exists in the Next.js script registry. Raw JavaScript is never stored in WordPress.', 'dynamics-headless') . '</p>';
    }

    public static function save_template_settings(int $post_id): void
    {
        if (!isset($_POST['dynamics_template_settings_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['dynamics_template_settings_nonce'])), 'dynamics_template_settings') || !current_user_can('edit_post', $post_id)) return;
        $body_class = preg_replace('/[^a-zA-Z0-9_\- ]/', '', sanitize_text_field(wp_unslash($_POST['dynamics_body_class'] ?? '')));
        $meta = json_decode((string) wp_unslash($_POST['dynamics_custom_meta'] ?? '{}'), true);
        $clean_meta = [];
        if (is_array($meta)) foreach ($meta as $key => $value) if (is_scalar($value)) $clean_meta[sanitize_key($key)] = sanitize_text_field((string) $value);
        $scripts = array_values(array_filter(array_map('sanitize_key', explode(',', sanitize_text_field(wp_unslash($_POST['dynamics_script_ids'] ?? ''))))));
        update_post_meta($post_id, '_dynamics_body_class', $body_class);
        update_post_meta($post_id, '_dynamics_custom_meta', $clean_meta);
        update_post_meta($post_id, '_dynamics_script_ids', $scripts);
    }

    private static function template_settings(int $template_id): array
    {
        if (!$template_id) return ['bodyClass' => '', 'customMeta' => new stdClass(), 'scripts' => []];
        $meta = get_post_meta($template_id, '_dynamics_custom_meta', true);
        $scripts = get_post_meta($template_id, '_dynamics_script_ids', true);
        return ['bodyClass' => (string) get_post_meta($template_id, '_dynamics_body_class', true), 'customMeta' => is_array($meta) ? $meta : new stdClass(), 'scripts' => is_array($scripts) ? $scripts : []];
    }

    private static function composition_for_post(int $post_id, bool $include_template = true, array $seen = []): array
    {
        if (!$post_id || in_array($post_id, $seen, true)) return [];
        $post = get_post($post_id);
        if (!$post) return [];
        $seen[] = $post_id;
        $modules = [];
        if ($include_template && $post->post_type === 'page') {
            $template_id = (int) get_post_meta($post_id, '_dynamics_template_id', true);
            if ($template_id) $modules = array_merge($modules, self::composition_for_post($template_id, false, $seen));
        }
        foreach (parse_blocks($post->post_content) as $index => $block) {
            if (($block['blockName'] ?? '') === 'dynamics/fragment') {
                $modules = array_merge($modules, self::composition_for_post((int) ($block['attrs']['fragmentId'] ?? 0), false, $seen));
                continue;
            }
            if (!str_starts_with((string) ($block['blockName'] ?? ''), 'dynamics/')) {
                $html = render_block($block);
                if (trim($html) !== '') $modules[] = ['id' => $post_id . '-html-' . $index, 'name' => '__html', 'config' => new stdClass(), 'resources' => new stdClass(), 'html' => $html];
                continue;
            }
            $name = substr((string) $block['blockName'], strlen('dynamics/'));
            $attrs = $block['attrs'] ?? [];
            $modules[] = [
                'id' => sanitize_key($attrs['moduleId'] ?? ($post_id . '-' . $index . '-' . $name)),
                'name' => sanitize_key($name),
                'config' => is_array($attrs['config'] ?? null) ? $attrs['config'] : new stdClass(),
                'resources' => is_array($attrs['resources'] ?? null) ? $attrs['resources'] : new stdClass(),
            ];
        }
        return $modules;
    }
}

Dynamics_Headless_Connector::boot();
