<?php

function thp_search_form_render_cb($atts){
        $bgColor   = esc_attr($atts['bgColor']);
        $textColor = esc_attr($atts['textColor']);
        $styleAttr = "background-color:{$bgColor};color:{$textColor};";

    ob_start();
?>
    <div style="<?php echo $styleAttr; ?>" 
    class="wp-block-thunder-plus-search-form">
    <h1>
        <?php esc_html_e('Search', 'thunder-plus'); ?>:
        <?php the_search_query(); ?>
        </h1>
    <form action="<?php echo esc_url(home_url('/')); ?>">
        <input type="text" placeholder="<?php esc_html_e('Search', 'thunder-plus'); ?>" name="s"
        value="<?php the_search_query(); ?>"/>
        <div class="btn-wrapper">
        <button type="submit" style="<?php echo $styleAttr; ?>">
        <?php esc_html_e('Search', 'thunder-plus'); ?>
        </button>
        </div>
    </form>
    </div>
<?php

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}