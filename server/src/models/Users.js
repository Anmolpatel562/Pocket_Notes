const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    device:String
})

const User = mongoose.model('User',userSchema);

module.exports = User;