/* eslint-disable new-cap */
const express = require('express');
const Route = express.Router();

const jobs = require('./routes/jobs');
const authe = require('./routes/auth');
const details = require('./routes/details');
const states = require('./routes/states');
const departments = require('./routes/departments');
const apply = require('./routes/apply');
const verification=require('./routes/verification');

console.log('aaa');
Route
    .use('/job', jobs)
    .use('/auth', authe)
    .use('/details',details)
    .use('/states',states)
    .use('/departments',departments)
    .use('/apply',apply)
    .use('/verification',verification);

module.exports = Route;