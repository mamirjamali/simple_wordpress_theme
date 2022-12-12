<?php 

function thp_enqueue_block_editor_assets(){
    $current_screen = get_current_screen();
    if($current_screen->base == "site-editor"){
        return;
    }
    
    wp_enqueue_script( 'thp_editor');
}