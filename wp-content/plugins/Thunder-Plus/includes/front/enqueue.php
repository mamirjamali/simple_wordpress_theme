<?php 

function thp_enqueue_scripts(){

    $authURL = json_encode([
        'signup' => rest_url( 'thp/v1/signup' )
    ]);

    wp_add_inline_script( 
        'thunder-plus-auth-modal-view-script',
         "const thp_auth_rest = {$authURL}", 
         'after' 
    );
}