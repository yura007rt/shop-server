const mongoose = require('mongoose');

exports.userSchema = new mongoose.Schema({
    displayName: String,
    user: {
        type: String,
        required: 'Укажите имя пользователя',
        unique: 'Такой пользователь уже существует'
    },
    passwordHash: String,
    salt: String,
    role: String,
    activeToken: Array
}, {
    timestamps: true
});
