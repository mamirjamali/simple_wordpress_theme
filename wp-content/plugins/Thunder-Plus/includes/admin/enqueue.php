<?php

function thp_admin_enqueue($hook_suffix){
    if(
        $hook_suffix==="toplevel_page_thp-plugin-options" ||
        $hook_suffix==="thunder-plus_page_thp-plugin-options-alt"
        ){
        wp_enqueue_media();
        wp_enqueue_style('thp_admin');
        wp_enqueue_script('thp_admin');
    }
}