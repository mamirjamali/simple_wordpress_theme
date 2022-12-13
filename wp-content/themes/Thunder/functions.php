<?php

//Variables

//Includes
include(get_theme_file_path('/includes/front/enqueue.php'));
include(get_theme_file_path('/includes/front/head.php'));
include(get_theme_file_path('/includes/setup.php'));
include(get_theme_file_path('/includes/class-tgm-plugin-activation.php'));
include(get_theme_file_path('/includes/register-plugins.php'));



//Hooks
add_action("wp_enqueue_scripts", "th_enqueue");
add_action('wp_head', 'th_head', 5);
add_action('after_setup_theme', 'th_setup_theme');
add_action('tgmpa_register', 'th_register_plugins');