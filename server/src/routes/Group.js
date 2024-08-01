const express = require('express');
const routes = express.Router();
const {createGroup} = require('../controllers/Group.js');

routes.post('/group/createGroup',createGroup);

module.exports = routes;