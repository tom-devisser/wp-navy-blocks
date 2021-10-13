wp.blocks.registerBlockType( 'wp-navy/quiz', {
	title: 'WP Navy Quiz',
	icon: 'smiley',
	category: 'common',
	attributes: {
		attribute: { 
			type: "string" 
		},
	},
	edit: function(props) {
		return (
			<div>
				<h3>What kind of question is this?</h3>
				<p>An inspirationless one.</p>
				<input type="text" placeholder="An attribute" value={props.attributes.attribute} onChange={(event) => {props.setAttributes({attribute: event.target.value})}}/>
			</div>
		)
	},
	save: function() {
		return null;
	},
} );