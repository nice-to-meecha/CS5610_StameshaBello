const Schema = require('mongoose').Schema;

exports.UserSchema = Schema({
    user: {
        type: String,
        unique: true,
    },
    password: Number,
}, { collection: "myUsers"});
