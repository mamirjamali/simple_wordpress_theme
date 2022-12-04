<?php

function thp_rest_api_init(){
    //example.com/wp-jason/thp/v1/signup
    register_rest_route( 'thp/v1', '/signup', [
        'methods' => 'POST',
        'callback' => 'thp_rest_api_signup_handler',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route( 'thp/v1', '/signin', [
        'methods' => 'POST',
        'callback' => 'thp_rest_api_signin_handler',
        'permission_callback' => '__return_true'
    ]);
}