<?php
/**
 * Plugin Name: WP Navy Blocks
 * Description: Blocks for the WP Navy template
 * Version 1.0
 * Author: Tom de Visser
 */

defined( 'ABSPATH' ) || die;

define( 'PLUGIN_DIR', plugin_dir_url( __FILE__ ) );

class WP_Navy_Blocks {
	function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'admin_assets' ) );
	}

	function admin_assets() {
		wp_register_script( 'wp-navy-quiz', PLUGIN_DIR . 'build/index.js', array( 'wp-blocks', 'wp-element' ) );
		register_block_type( 'wp-navy/quiz', array(
			'editor_script'   => 'wp-navy-quiz',
			'render_callback' => array( $this, 'wp_navy_quiz_markup' )
		) );
	}

	function wp_navy_quiz_markup( $attributes ) {
		return '<p>Hello from PHP. This is my attribute</p>';
	}
}

$wp_navy_quiz = new WP_Navy_Blocks();