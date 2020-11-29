/* eslint-disable new-cap */
/* eslint-disable max-len */
const express = require('express');
const Route = express.Router();
//const redis = require('../helpers/redis');

const deptController = require('../controllers/departments');

//console.log(5)
Route
    .get('/', deptController.getDepartments)



module.exports = Route;