const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userName:String,
    Password:String
});

module.exports = User = mongoose.model('user',UserSchema);