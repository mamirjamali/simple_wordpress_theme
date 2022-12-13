<?php

// Register the related pluigins for the theme
function th_register_plugins() {
    $plugins = [
        [
            'name'     => 'Regenerate Thumbnails',
            'slug'     => 'regenerate-thumbnails',
            'required' => false
        ],
        [
            'name'     => 'Thunder Plus Plugin',
            'slug'     => 'Thunder-Plus',
            'required' => true,
            'source'   => get_template_directory() . '/plugins/Thunder-Plus.zip'
        ]
    ];
    $config = [
        'id'          => 'Thunder',
        'meue'        => 'tgmpa-install-plugins',
        'parent_slug' => 'themes.php',
        'capability'  => 'edit_theme_options',
        'has_notices' => true,
        'dismissable' => true
    ];

    tgmpa($plugins, $config);
}