const createdGroupSchema = require("../models/CreatedGroup");

const createGroup = async (req, res) => {
  try {
    const { device, name, color } = req.body;
    console.log(device);
    console.log(name);
    if (!device || !name || !color) {
      return res.status(400).json({
        message: "DeviceId not found !",
      });
    }
    await createdGroupSchema.create({ device, name, color });
    res.status(201).json({
      message: "Group Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const createNotes = async (req, res) => {
  try {
    const { groupId, text } = req.body;
    if (!groupId || !text) {
      return res.status(400).json({
        message: "GroupId not found !",
      });
    }
    const content = {
      text: text,
      createdAt: new Date(),
    };
    const group = await createdGroupSchema.findById(groupId);
    group.content.push(content);
    await group.save();
    res.status(201).json({
      message: "Note Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = { createGroup, createNotes };
