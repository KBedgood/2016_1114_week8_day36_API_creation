// The Post model

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number,
    likesJS: Boolean,
});

module.exports = mongoose.model('User', userSchema);