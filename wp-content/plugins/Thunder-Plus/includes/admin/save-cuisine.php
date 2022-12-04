<?php 

function thp_save_cuisine_meta($termID){
    if(!isset($_POST['thp_more_info_url'])){
        return;
    }
    
    update_term_meta( 
        $termID,
        'more_info_url',
        sanitize_url( $_POST['thp_more_info_url'])
    );
}