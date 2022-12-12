<?php 

function thp_send_options(){
    if(!current_user_can( 'edit_theme_options')){
        wp_die( 
            __("You are not allowed to be on this page", "thunder-plus") 
        );
    }

    check_admin_referer( 'thp_options_verify');

    $options = get_option('thp_options');
    
    $options['og_title'] = sanitize_text_field( $_POST['thp_og_title']);
    $options['og_image'] = sanitize_url( $_POST['thp_og_image']);
    $options['og_description'] = sanitize_text_field( $_POST['thp_og_description']);
    $options['enable_og'] =  absint( $_POST['thp_enable_og']);

    update_option('thp_options', $options);
    
    wp_redirect( admin_url('admin.php?page=thp-plugin-options&status=1'));
    

}