<?php 

function thp_plugin_options_alt_page(){
    ?>
    <div class="wrap">
        <form method="POST" action="options.php">
            <?php

              settings_fields( 'thp_option_group' );
              do_settings_sections('thp-plugin-options-alt-sec');
              submit_button();
            ?>
        </from>
    </div>
    
    <?php
}