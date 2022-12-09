<?php 

function thp_rest_recipe_query($args, $request){
    $orderaBy = $request->get_param('orederByRating');

    if(isset($orderaBy)){
        $args['orderby'] = 'meta_value_name';
        $args['meta_key'] = 'recipe_rating';
    }

    return $args;
}