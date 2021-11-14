const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    firstName: { type: String, required: true},
	lastName: { type: String, required: true},
	age: { type: Number, required: false},
	city: { type: String, required: false},
});

const Users = model('Users',userSchema);

module.exports = Users;