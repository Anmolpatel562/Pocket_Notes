const express = require('express');
const routes = express.Router();
const {createNotes} = require('../controllers/Notes.js');

routes.post('/notes/createNotes',createNotes);

module.exports = routes;