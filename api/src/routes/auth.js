/* eslint-disable new-cap */
const express = require('express');
const Route = express.Router();

const authController = require('../controllers/auth');

Route
    .post('/register', authController.Register)
    .post('/login', authController.Login);

module.exports = Route
;