/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const deptModel = require('../models/departments');

const uuidv4 = require('uuid/v4'); // input random id dari tiap user

module.exports = {
  getDepartments: (req, res) => {
    deptModel.getDepartments()
    .then((data) => {
      res.json({
        success: true,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
};
