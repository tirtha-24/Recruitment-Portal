/* eslint-disable new-cap */
/* eslint-disable max-len */
const express = require('express');
const Route = express.Router();

const statesController = require('../controllers/states');


Route
    .get('/', statesController.getStates)



module.exports = Route;