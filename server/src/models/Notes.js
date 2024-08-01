const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  groupId: {
    type: mongoose.Types.ObjectId,
  },
  title: {
    type: String,
  },
  content: [
    {
      content: String,
      createdAt: Date,
    },
  ],
});

const Notes = mongoose.model('Notes',notesSchema)

module.exports = Notes;