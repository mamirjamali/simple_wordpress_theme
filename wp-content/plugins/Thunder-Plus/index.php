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
include(THP_PLUGIN_DIR . "includes/register-blocks.php");
include(THP_PLUGIN_DIR . "includes/blocks/search-form.php");
include(THP_PLUGIN_DIR . "includes/blocks/page_header.php");

//Hooks
add_action('init', 'thp_register_blocks');
