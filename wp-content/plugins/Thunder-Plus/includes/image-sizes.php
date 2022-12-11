<?php 

function thp_custom_image_sizes($sizes){
    return array_merge($sizes,[
        'teamMember' => __('Team Member', 'thunder-plus'),
        'openGraph' => __('Open Graph', 'thunder-plus')
    ]);
}