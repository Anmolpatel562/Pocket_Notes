const createdGroupSchema = require("../models/CreatedGroup");

const createGroup = (req, res) => {
  try {
    const { device, name,color } = req.body;
    console.log(device);
    console.log(name);
    if (!device || !name || !color) {
      return res.status(400).json({
        message: "DeviceId not found !",
      });
    }
    createdGroupSchema.create({ device, name, color });
    res.status(201).json({
      message: "Group Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {createGroup};