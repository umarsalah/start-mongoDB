const Posts = require('../../database/models/Posts');

const postQueries = {};

postQueries.createPost = ({ content, author }) => {
	return Posts.create({ content, author });
};

postQueries.findAllPosts = () => {
	return Posts.find();
};

postQueries.deleteAllPosts = () => {
	return Posts.deleteMany({});
};


module.exports = postQueries;
