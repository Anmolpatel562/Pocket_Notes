const Notes = require("../models/Notes");

const createNotes = (req, res) => {
  try {
    const { groupId, title, textContent } = req.body;
    
    if (!groupId || !title || !textContent) {
      return res.status(400).json({
        message: "GroupId not found !",
      });
    }
    const content = {
      content: textContent,
      createdAt: new Date(),
    };
    console.log(textContent)
    Notes.create({ groupId, title, content });
    res.status(201).json({
      message: "Note Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = { createNotes };
