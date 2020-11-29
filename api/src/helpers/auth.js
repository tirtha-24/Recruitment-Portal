/* eslint-disable max-len */
const JWT = require('jsonwebtoken');
const config = require('../configs/configs');

module.exports = {
  authInfo: (req, res, next) => {
    const headerSecret = req.headers['x-access-token'];

    if (typeof headerSecret === 'undefined') {
      console.log('Token not existed!');
      next();
    } else {
      req.token = headerSecret;
      console.log('Token stored');
      next();
    }
  },
  authAccess: (req, res, next) => {
    const accessToken = req.token;

    JWT.verify(accessToken, config.jwtSecret, (err) => {
      if (err && err.name === 'TokenExpiredError') {
        console.log('Token expired!')
        return res.status(403).json({message: 'Token expired!'});
      }
      if (err && err.name === 'JsonWebTokenError') {
        console.log('Token Invalid!')
        return res.status(403).json({message: 'Token Invalid!'});
      }

      console.log('Access Granted!');
      next();
    });
  },
};
