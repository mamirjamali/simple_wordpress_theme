<?php 

function thp_register_asset(){
    wp_register_style(
        'thp_admin',
        plugins_url('/build/admin/index.css', THP_PLUGIN_FILE)
    );

    $adminAssets = include(THP_PLUGIN_DIR.'build/admin/index.asset.php');

    wp_register_script(
        'thp_admin',
        plugins_url('/build/admin/index.js', THP_PLUGIN_FILE),
        $adminAssets['dependencies'],
        $adminAssets['version'],
        true
    );

    $editorAssets = include(THP_PLUGIN_DIR.'build/block-editor/index.asset.php');
    
    wp_register_script( 
        'thp_editor',
         plugins_url('/build/block-editor/index.js', THP_PLUGIN_FILE), 
         $editorAssets['dependencies'], 
         $editorAssets['version'], 
         true
    );

    wp_register_style( 
        'thp_editor',
         plugins_url('/build/block-editor/index.css', THP_PLUGIN_FILE),
    );
}