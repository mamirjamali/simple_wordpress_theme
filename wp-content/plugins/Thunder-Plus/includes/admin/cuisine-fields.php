<?php 

function thp_cuisine_add_form_fields(){
    ?>
    <div class="form-field">
        <label><?php _e('More Info URL', 'thunder-plus'); ?></label>
        <input type="text" name="thp_more_info_url" />
        <p><?php _e('A URL a user can click to learn more information about this cuisine') ?>
    </div>

    <?php 
}

function thp_cuisine_edit_form_fields($term){
    $url = get_term_meta( 
        $term->term_id,
        'more_info_url', 
        true
        )
    ?>
    <tr class="form-field">
        <th>
            <label><?php _e('More Info URL', 'thunder-plus'); ?></label>
        </th>
        <td>
            <input type="text" name="thp_more_info_url" value="<?php echo $url;?>"/>
            <p><?php _e('A URL a user can click to learn more information about this cuisine') ?>
        </td>
    </tr>
    <?php
}