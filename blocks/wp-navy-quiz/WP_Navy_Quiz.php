<?php

class WP_Navy_Quiz {
	function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'admin_assets' ) );
	}

	function admin_assets() {
		wp_enqueue_script( 'wp-navy-quiz', plugin_dir_url( __FILE__ ) . 'wp-navy-quiz.js', array( 'wp-blocks', 'wp-element' ) );
	}
}

$wp_navy_quiz = new WP_Navy_Quiz();