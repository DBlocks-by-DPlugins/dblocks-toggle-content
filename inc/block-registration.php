<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

function dblocks_toggle_content_register_block() {
    register_block_type( constant('DBLOCKS_TOGGLE_CONTENT_PATH') . 'build/' );
}
add_action( 'init',  'dblocks_toggle_content_register_block' );
