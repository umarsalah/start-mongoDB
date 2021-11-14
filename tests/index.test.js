const tape = require('tape');
const connection = require('../server/database/connection');

const {
	createPost,
	findAllPosts,
	deleteAllPosts,
} = require('../server/database/queries/posts');

const { getUser, addUser, deleteAll } = require('../server/database/queries/users');


tape('testing createUser query', async (t) => {
	const user = {
		firstName: 'Umar',
		lastName: 'Salah',
	};

	await deleteAll();
	await deleteAllPosts();
	const newUser = await addUser(user);
	const newPost = await createPost({
		content: 'Hello, G10',
		author: newUser._id,
	});
	console.log(newPost);
});