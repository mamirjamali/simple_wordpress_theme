<?php 

function thp_generate_daily_recipe(){
    global $wpdb;
    $id = $wpdb->get_var(
        "SELECT ID from {$wpdb->posts} 
         WHERE post_status='publish' AND post_type='recipe' 
         ORDER BY rand() LIMIT 1"
         );
    
    set_transient( 'thp_daily_recipe_id', $id, DAY_IN_SECONDS);
    
    return $id;
}