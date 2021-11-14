const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    content: { type: String, required: true},
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Posts = model('Posts', postSchema);

module.exports = Posts;