<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

function dblocks_toggle_content_register_block() {
    $blocks = [
        'toggle-content',
        'toggle-content-inner'
    ];

    foreach ( $blocks as $block ) {
        register_block_type( constant('DBLOCKS_TOGGLE_CONTENT_PATH') . 'build/' . $block );
    }
}
add_action( 'init',  'dblocks_toggle_content_register_block' );
