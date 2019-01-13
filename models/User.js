const mongoose = require('mongoose');
// const Schema = mongoose.Schema; // or
const { Schema } = mongoose;

const userScheman = new Schema({
    googleId: String,
});

mongoose.model('users', userScheman);
