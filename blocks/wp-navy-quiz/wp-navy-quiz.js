wp.blocks.registerBlockType( 'wp-navy/quiz', {
	title: 'WP Navy Quiz',
	icon: 'smiley',
	category: 'common',
	edit: function() {
		return (
			<div>
				<h1>What kind of question is this?</h1>
				<p>A inspirationless one.</p>
			</div>
		)
	},
	save: function() {
		return (
			<div>
				<h1>What kind of question is this?</h1>
				<p>A inspirationless one.</p>
			</div>
		)
	},
} );