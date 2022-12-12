<?php 

function thp_load_php_translations(){
    load_plugin_textdomain( 
        "thunder-plus", 
        false, 
        "thunder-plus/languages" 
    );
}

function thp_load_block_translation(){
    $blocks = [
        'thunder-plus-fancy-header-editor-script',
        'thunder-plus-advanced-search-editor-script',
        'thunder-plus-page-header-editor-script',
        'thunder-plus-featured-video-editor-script',
        'thunder-plus-header-tools-editor-script',
        'thunder-plus-auth-modal-script',
        'thunder-plus-auth-modal-editor-script',
        'thunder-plus-recipe-summary-script',
        'thunder-plus-recipe-summary-editor-script',
        'thunder-plus-team-members-group-editor-script',
        'thunder-plus-team-member-editor-script',
        'thunder-plus-popular-recipes-editor-script',
        'thunder-plus-daily-recipe-editor-script'
      ];

      foreach($blocks as $block){
        wp_set_script_translations( 
            $block, 
            "thunder-plus", 
             UP_PLUGIN_DIR . "languages"
        );
      }
}