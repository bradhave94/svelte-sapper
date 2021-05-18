import posts from './_posts.js';

const contents = JSON.stringify(
	posts.map((post) => {
		return {
			name: post.name,
			id: post.id,
		};
	})
);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	res.end(contents);
}
