const Schema = require('mongoose').Schema;

exports.UserSchema = Schema({
    username: {
        type: String,
        unique: true,
    },
    password: Number,
}, { collection: "myUsers2.0"});
