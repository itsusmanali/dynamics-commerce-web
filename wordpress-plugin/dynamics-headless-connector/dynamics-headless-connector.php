<?php
/**
 * Plugin Name: Dynamics Headless Connector
 * Description: Connects WordPress to the Dynamics Commerce Next.js frontend with previews, cache revalidation, and connection checks.
 * Version: 1.2.0
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

    public static function boot(): void
    {
        register_activation_hook(__FILE__, [self::class, 'activate']);
        add_action('admin_menu', [self::class, 'admin_menu']);
        add_action('admin_init', [self::class, 'register_settings']);
        add_action('admin_post_dynamics_headless_test', [self::class, 'test_connection']);
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
    }

    private static function settings(): array
    {
        return wp_parse_args(get_option(self::OPTION, []), [
            'frontend_url' => 'https://dynamics-commerce-web.vercel.app',
            'revalidation_secret' => '',
            'preview_secret' => '',
            'redirects' => '',
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
        ?>
        <div class="wrap">
            <h1><?php esc_html_e('Dynamics Headless Frontend', 'dynamics-headless'); ?></h1>
            <p><?php esc_html_e('Publish in WordPress as usual. This connector handles previews and tells the Next.js site when content changes.', 'dynamics-headless'); ?></p>
            <?php if ($notice === 'success') : ?><div class="notice notice-success"><p><?php esc_html_e('Connection successful. WordPress, GraphQL, and Next.js agree.', 'dynamics-headless'); ?></p></div><?php endif; ?>
            <?php if ($notice === 'failed') : ?><div class="notice notice-error"><p><?php esc_html_e('Connection failed. Confirm the Vercel environment variables and deploy the latest frontend.', 'dynamics-headless'); ?></p></div><?php endif; ?>
            <table class="widefat striped" style="max-width:760px;margin:20px 0">
                <tbody>
                    <tr><td><strong>WPGraphQL</strong></td><td><?php echo $graphql_ok ? '✅ Active' : '❌ Missing'; ?></td></tr>
                    <tr><td><strong>Yoast SEO</strong></td><td><?php echo $yoast_ok ? '✅ Active' : '❌ Missing'; ?></td></tr>
                    <tr><td><strong>GraphQL endpoint</strong></td><td><code><?php echo esc_html(home_url('/graphql')); ?></code></td></tr>
                </tbody>
            </table>
            <form method="post" action="options.php">
                <?php settings_fields('dynamics_headless'); ?>
                <table class="form-table"><tbody>
                    <tr><th><label for="dh_frontend">Frontend URL</label></th><td><input class="regular-text" id="dh_frontend" type="url" name="<?php echo esc_attr(self::OPTION); ?>[frontend_url]" value="<?php echo esc_attr($settings['frontend_url']); ?>" required><p class="description">Your public Vercel URL, without a trailing slash.</p></td></tr>
                    <tr><th><label for="dh_revalidate">Revalidation secret</label></th><td><input class="large-text code" id="dh_revalidate" type="text" name="<?php echo esc_attr(self::OPTION); ?>[revalidation_secret]" value="<?php echo esc_attr($settings['revalidation_secret']); ?>" autocomplete="off"><p class="description">Copy this to Vercel as <code>WORDPRESS_REVALIDATION_SECRET</code>.</p></td></tr>
                    <tr><th><label for="dh_preview">Preview secret</label></th><td><input class="large-text code" id="dh_preview" type="text" name="<?php echo esc_attr(self::OPTION); ?>[preview_secret]" value="<?php echo esc_attr($settings['preview_secret']); ?>" autocomplete="off"><p class="description">Copy this to Vercel as <code>WORDPRESS_PREVIEW_SECRET</code>.</p></td></tr>
                    <tr><th><label for="dh_redirects">Permanent redirects</label></th><td><textarea class="large-text code" id="dh_redirects" rows="7" name="<?php echo esc_attr(self::OPTION); ?>[redirects]" placeholder="/old-page => /new-page"><?php echo esc_textarea($settings['redirects']); ?></textarea><p class="description">One internal 308 redirect per line, for example <code>/old-page =&gt; /new-page</code>.</p></td></tr>
                </tbody></table>
                <?php submit_button(__('Save connection', 'dynamics-headless')); ?>
            </form>
            <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                <input type="hidden" name="action" value="dynamics_headless_test">
                <?php wp_nonce_field('dynamics_headless_test'); ?>
                <?php submit_button(__('Test connection', 'dynamics-headless'), 'secondary', 'submit', false); ?>
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
    }
}

Dynamics_Headless_Connector::boot();
