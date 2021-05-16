var ghpages = require('gh-pages');

ghpages.publish(
	'__sapper__/export/svelte-sapper', // <-- replace yourproject with your repo name
	{
		branch: 'gh-pages',
		repo: 'https://github.com/bradhave94/svelte-sapper.git',
		user: {
			name: 'Bradley Haveman',
			email: 'bradley@haveman.ca',
		},
	},
	() => {
		console.log('Deploy Complete!');
	}
);
