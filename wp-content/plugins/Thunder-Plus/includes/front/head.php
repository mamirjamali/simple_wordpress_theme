<?php 

function thp_wp_head(){
    $options = get_option( 'thp_options');

    if($options['enable_og'] != 1){
        return;
    }

    $title = $options['og_title'];
    $description = $options['og_description'];
    $image = $options['og_image'];
    $url = site_url( '/');

    if(is_single()){
        $postID = get_the_id();

        $newTitle = get_post_meta( $postID, 'og_title', true );
        $title = empty($newTitle) ? $title : $newTitle ;

        $newdescription = get_post_meta( $postID, 'og_description', true );
        $description = empty($newdescription) ? $description : $newdescription;

        $imagePreview = get_post_meta( $postID, 'og_override_image', true);
        $image = $imagePreview  ? 
        get_post_meta( $postID, 'og_image', true) :
        get_the_post_thumbnail( 'openGraph');
    }

    ?>
    <meta property="og:title"
      content="<?php echo esc_attr($title); ?>"/>
    <meta property="og:description"
      content="<?php echo esc_attr($description); ?>"/>
    <meta property="og:image"
      content="<?php echo esc_attr($image); ?>"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url"
      content="<?php echo esc_attr($url);?>"
    <?php
}