const mongoose = require("mongoose");

const createdGroupSchema = mongoose.Schema({
    name:String,
    color:String,
    device:String,
})

const Group = mongoose.model('createdGroup',createdGroupSchema);

module.exports = Group;