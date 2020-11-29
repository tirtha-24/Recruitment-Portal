const express = require('express');
const Route = express.Router();

const authController = require('../controllers/verification');

Route
    .get('/', authController.verification)

module.exports = Route