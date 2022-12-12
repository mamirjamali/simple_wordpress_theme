<?php 

if(!defined("WP_UNINSTALL_PLUGIN")){
    exit;
}

delete_option("thp_options");


global $wpdb;

$wpdb->query(
    "DROP TABLE IF EXISTS {$wpdb->prefix}recipe_rating"
);