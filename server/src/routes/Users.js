const express = require("express");
const routes = express.Router();
const { createUser,getExistingUserCount } = require("../controllers/Users.js");

routes.post('/user/createUser',createUser);
routes.get('/user/getExistingUserCount',getExistingUserCount);

module.exports = routes;
