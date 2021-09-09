const mongoose = require('mongoose');
const {
    Schema
} = mongoose; // ES6 syntax, this and const Schema = mongoose.Schema; are 100 equal

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);