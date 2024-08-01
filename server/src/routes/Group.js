const express = require("express");
const routes = express.Router();
const { createGroup, createNotes, getAllGroupsByDeviceId } = require("../controllers/Group.js");

routes.post("/group/createGroup", createGroup);
routes.post("/group/createNotes", createNotes);
routes.get("/group/getAllGroupsByDeviceId/:device",getAllGroupsByDeviceId);

module.exports = routes;
