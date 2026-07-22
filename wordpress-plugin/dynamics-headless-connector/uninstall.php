<?php

if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

delete_option('dynamics_headless_settings');
