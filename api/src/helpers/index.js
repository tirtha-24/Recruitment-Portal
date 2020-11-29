/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
const crypto = require('crypto');

module.exports = {
  response: () => {
    console.log('Response');
  },
  customErrorResponse: () => {
    console.log('Error Response!');
  },
  genSalt: (length) => crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length),

  sha512: (password, salt) => {
    const hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    const value = hash.digest('hex');
    return value;
  },
};
