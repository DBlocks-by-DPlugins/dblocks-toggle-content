<?php
/**
 * Plugin Name:       DBlocks Toggle Content
 * Description:       GDPR friendly lazyload youtube player that load content only if user click on the play video
 * Requires at least: 6.5.2
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            DPlugins
 * Author URI:      	https://dplugins.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dblocks-toggle-content
 * @package           CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Define plugin URLs and PATHs
define( 'DBLOCKS_TOGGLE_CONTENT_DIR',	plugin_dir_path(__FILE__));
define( 'DBLOCKS_TOGGLE_CONTENT_PATH',	plugin_dir_path(__FILE__));
define( 'DBLOCKS_TOGGLE_CONTENT_URL',	plugin_dir_url(__FILE__));
define( 'DBLOCKS_TOGGLE_CONTENT_BASE',	plugin_basename(__FILE__));


// Include the components using the prefixed path constant
require_once DBLOCKS_TOGGLE_CONTENT_PATH . 'inc/block-registration.php';
require_once DBLOCKS_TOGGLE_CONTENT_PATH . 'inc/category.php';
// require_once DBLOCKS_TOGGLE_CONTENT_PATH . 'inc/theme-api.php';