wp.blocks.registerBlockType( 'wp-navy/quiz', {
	title: 'WP Navy Quiz',
	icon: 'smiley',
	category: 'common',
	attributes: {
		attribute: { 
			type: "string" 
		},
	},
	edit: EditQuizBlock,
	save: function() {
		return null;
	},
} );

function EditQuizBlock(props) {
	return (
		<div>
			<h5>What do you want to show in the frontend?</h5>
			<p>Fill in your message.</p>
			<input type="text" placeholder="An attribute" value={props.attributes.attribute} onChange={(event) => {props.setAttributes({attribute: event.target.value})}}/>
		</div>
	)
}