<?php 

function thp_rest_api_daily_recipe_handler(){
    $response = [
        'url' => '',
        'img' => '',
        'title' => ''
    ];

    $id = get_transient( 'thp_daily_recipe_id' );

    if(!$id){
        $id = thp_generate_daily_recipe();
    }

    $response['url'] = get_permalink($id);
    $response['img'] = get_the_post_thumbnail_url( $id, 'full');
    $response['title'] = get_the_title($id);

    return $response;
}