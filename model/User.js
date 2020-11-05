const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userEmail:String,
    Password:String
});

module.exports = User = mongoose.model('user',UserSchema);