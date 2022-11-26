<?php

function th_enqueue(){
    wp_register_style( 
        'th_rubik_and_pacifico',
        'https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik:wght@300;400;500;700&display=swap',
        [],
        '1.0'
    );
    wp_register_style( 
        'th_bootstrap_icons',
        get_theme_file_uri('assets/bootstrap-icons/bootstrap-icons.css')
    ); 
    wp_register_style( 
        'th_theme',
        get_theme_file_uri('assets/public/index.css')
    ); 

    wp_enqueue_style('th_rubik_and_pacifico');
    wp_enqueue_style('th_bootstrap_icons');
    wp_enqueue_style('th_theme');
}