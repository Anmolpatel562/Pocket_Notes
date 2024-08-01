const express = require("express");
const routes = express.Router();
const { createGroup, createNotes } = require("../controllers/Group.js");

routes.post("/group/createGroup", createGroup);
routes.post("/group/createNotes", createNotes);

module.exports = routes;
