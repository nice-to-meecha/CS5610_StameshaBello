const mongoose = require("mongoose");

const UserSchema = require("./user.schema").UserSchema;
const UserModel = mongoose.model("UserModel", UserSchema);

function createUser(user) {
    return UserModel.create(user);
}

// When use find methods, must use .exec() (execute)
// method afterward
function returnAllUsers() {
    return UserModel.find().exec();
}

function getUserById(id) {
    return UserModel.findById(id).exec();
}

function findUserByColor(color) {
    return UserModel.find({ color }).exec();
}

module.exports = {
    createUser,
    returnAllUsers,
    getUserById,
    findUserByColor,
}