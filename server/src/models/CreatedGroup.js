const mongoose = require("mongoose");

const createdGroupSchema = mongoose.Schema({
  name: String,
  color: String,
  device: String,
  content: [
    {
      text: String,
      createdAt: Date,
    },
  ],
});

const Group = mongoose.model("createdGroup", createdGroupSchema);

module.exports = Group;
