<?php 

function thp_admin_menu(){
    add_menu_page( 
        __('Thunder Plus', 'thunder-plus'),
        __('Thunder Plus', 'thunder-plus'),
        'edit_theme_options',
        'thp-plugin-options',
        'thp_plugin_option_page', 
        plugins_url( 'thunder.svg', THP_PLUGIN_FILE )
    );

    add_submenu_page( 
        'thp-plugin-options', 
         __('Alt Thunder Plus', 'thunder-plus '),
         __('Alt Thunder Plus', 'thunder-plus '),
         'edit_theme_options', 
         'thp-plugin-options-alt', 
         'thp_plugin_options_alt_page'
    );
}