/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const statesModel = require('../models/states');

const uuidv4 = require('uuid/v4'); // input random id dari tiap user

module.exports = {
  getStates: (req, res) => {
    statesModel.getStates()
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
