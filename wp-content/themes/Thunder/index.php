<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset=<?php bloginfo('charset'); ?>>
    <?php wp_head();?>
</head>
<body <?php body_class('example'); ?>>
 <?php wp_body_open(); ?>
 
 <p>Hello World</p>
 
 <?php wp_footer();?>
</body>
</html>