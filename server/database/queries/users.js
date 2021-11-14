const Users=require('../../database/models/Users');

const userQueries={};

userQueries.getUser = (name) => {
    return Users.findOne({name});
};
userQueries.getUsers = () => {
    return Users.find();
};
userQueries.deleteAll=() =>{
    return Users.deleteMany({});
};
userQueries.deleteUser=(name) =>{
    return Users.deleteOne({name});
};
userQueries.addUser=(user) =>{
    return Users.create(user);
};

module.exports = userQueries;