<?php
/*
Plugin Name: Preact Plugin Boilerplate
Plugin URI: https://michaelyang.dev
Description: This plugin is used a Boilerplate for wordpress plugin using preact.
Version: 0.0.0
Author:Michael Yang 
Author URI: https://michaelyang.dev
*/

if( WP_DEBUG && WP_DEBUG_DISPLAY && (defined('DOING_AJAX') && DOING_AJAX) ) {
	@ ini_set( 'display_errors', 1 );
}

// Add the following to wp-config.php for testing
//define('WP_DEBUG', true);

// Enable Debug logging to the /wp-content/debug.log file
//define('WP_DEBUG_LOG', true);

// Disable display of errors and warnings
//define('WP_DEBUG_DISPLAY', true);


add_action('wp_ajax_nopriv_number_action', 'wc_number_action');
add_action('wp_ajax_number_action', 'wc_number_action');
function wc_number_action() {
	// Check the nonce for security
//	if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'my_vite_plugin_nonce')) {
//		wp_send_json_error('Invalid nonce');
//		wp_die();
//	}

	// Get the phone number from the AJAX requestd
	$num1 = isset($_POST['num1']) ? sanitize_text_field($_POST['num1']) : '';
	$num2 = isset($_POST['num2']) ? sanitize_text_field($_POST['num2']) : '';
	$newnum = "asdf".$num1.$num2;

	// Here you can add your logic to process the phone number
	// For example, you can send it to an external API or save it in the database

	// Simulate a successful response
	$response = array(
		'status' => 'success',
		'message' => 'Phone number processed successfully',
		'result' => $newnum
	);

	// Send the response back to the AJAX request
	wp_send_json_success($response);
	wp_die();
}

function my_vite_plugin_shortcode($atts = []) {
    // Shortcode output
    $output = '<div id="app"></div>';
	wp_enqueue_script('jquery'); // ensures $ is defined
	wp_enqueue_style('my-vite-plugin-style', plugin_dir_url(__FILE__) . 'dist/assets/demo-style.css', [], null);
	wp_enqueue_script('my-vite-plugin-script', plugin_dir_url(__FILE__) . 'dist/assets/demo-index.js', [], null, true);
    return $output;
}
add_shortcode('my_vite_plugin', 'my_vite_plugin_shortcode');
