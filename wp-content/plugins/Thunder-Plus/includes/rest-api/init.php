<?php

function thp_rest_api_init(){
    //example.com/wp-jason/thp/v1/signup
    register_rest_route( 'thp/v1', '/signup', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'thp_rest_api_signup_handler',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route( 'thp/v1', '/signin', [
        'methods' => WP_REST_Server::EDITABLE,
        'callback' => 'thp_rest_api_signin_handler',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route( 'thp/v1', '/rate', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'thp_rest_api_add_rating_handler',
        'permission_callback' => '__return_true'
    ]);
}