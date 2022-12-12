<?php 

function thp_settings_api(){
    register_setting('thp_option_group', 'thp_options');

    add_settings_section(
         'thp_option_section', 
         __('Thunder Plus Settings', 'thunder-plus'), 
         'thp_option_section_cb', 
         'thp-plugin-options-alt-sec' 
    );

    add_settings_field( 
        'og_title_input', 
        __('Open Graph Title', 'thunder-plus'), 
        'og_title_input_cb', 
        'thp-plugin-options-alt-sec', 
        'thp_option_section', 
    );
    add_settings_field( 
        'og_image_input', 
        __('Open Graph image', 'thunder-plus'), 
        'og_image_input_cb', 
        'thp-plugin-options-alt-sec', 
        'thp_option_section', 
    );
    add_settings_field( 
        'og_description_input', 
        __('Open Graph description', 'thunder-plus'), 
        'og_description_input_cb', 
        'thp-plugin-options-alt-sec', 
        'thp_option_section', 
    );
    add_settings_field( 
        'og_enable_input', 
        __('Open Graph enable', 'thunder-plus'), 
        'og_enable_input_cb', 
        'thp-plugin-options-alt-sec', 
        'thp_option_section', 
    );
}

function og_title_input_cb(){
    $options = get_option( 'thp_options');
    ?>
    <input class="reqular-text" name="thp_options[og_title]"
    value="<?php echo esc_attr( $options['og_title'] ) ?>"/>
    <?php
    
}


function thp_option_section_cb(){
    ?>
    <p> An Alternative form for updating options with the setting API</p>
    <?php
}

function og_image_input_cb(){
    $options = get_option('thp_options');
    ?>
    <input type="hidden" name="thp_options[og_image]" id="thp_og_image"
      value="<?php echo esc_attr($options['og_image']); ?>">
    <img src="<?php echo esc_attr($options['og_image']); ?>"
      id="og-img-preview">
    <a href="#" class="button-primary" 
      id="og-img-btn">
      Select Image
    </a>
    <?php
  }
  
  function og_description_input_cb(){
    $options = get_option('thp_options');
    ?>
    <textarea 
      name="thp_options[og_description]"
      class="large-text"
    ><?php echo esc_html($options['og_description']); ?></textarea>
    <?php
  }
  
  function og_enable_input_cb(){
    $options = get_option('thp_options');
    ?>
    <label for="thp_enable_og"> 
      <input name="thp_options[enable_og]" type="checkbox" id="thp_enable_og" 
        value="1" <?php checked('1', $options['enable_og']); ?> /> 
      <span>Enable</span>
    </label>
    <?php
  }
