<?php
/**
 * Plugin Name:       Thunder Plus Plugin
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Handle the basics with this plugin.
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Amir Jamali
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       thunder-plus
 * Domain Path:       /languages
 */

if(!function_exists('add_action')){
    echo "Seems you stumbled here by accident.";
    exit;
}

//Setup
define('THP_PLUGIN_DIR', plugin_dir_path(__FILE__));

//Includes
$rootFiles         = glob(THP_PLUGIN_DIR."includes/*.php");
$subdirectoryFiles = glob(THP_PLUGIN_DIR."includes/**/*.php");
$allFiles          = array_merge($rootFiles, $subdirectoryFiles);

foreach($allFiles as $filename){
    include_once($filename);
}

//Hooks
register_activation_hook( __FILE__, 'thp_active_plugin' );
add_action('init', 'thp_register_blocks');
add_action('rest_api_init', 'thp_rest_api_init');
add_action('wp_enqueue_scripts', 'thp_enqueue_scripts');
add_action( 'init', 'thp_recipe_post_type');
add_action('cuisine_add_form_fields', 'thp_cuisine_add_form_fields');
add_action( 'create_cuisine', 'thp_save_cuisine_meta');
add_action('cuisine_edit_form_fields', 'thp_cuisine_edit_form_fields');
add_action('edited_cuisine', 'thp_save_cuisine_meta');
add_action( 'save_post_recipe', 'thp_save_post_recipe');
add_action('after_setup_theme', 'thp_setup_theme');
add_filter('image_size_names_choose', 'thp_custom_image_sizes');
add_filter( 'rest_recipe_query', 'thp_rest_recipe_query', 10, 2);