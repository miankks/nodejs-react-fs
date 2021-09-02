const mongoose = require('mongoose');
const {
    Schema
} = mongoose; // ES6 syntax, this and const Schema = mongoose.Schema; are 100 equal

const userSchema = new Schema({
    googleId: String,

});

mongoose.model('users', userSchema);