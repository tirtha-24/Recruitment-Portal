/* eslint-disable new-cap */
const express = require('express');
const Route = express.Router();

const appController = require('../controllers/apply');

Route
    .post('/', appController.apply)
module.exports = Route
;