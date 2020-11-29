/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const authModel = require('../models/auth');
const getDetailModel = require('../models/getDetails');
const setPass = require('../helpers/index');
const jwt = require('jsonwebtoken');
const configs = require('../configs/configs');
const validator = require('validator');
const uuidv4 = require('uuid/v4'); // input random id dari tiap user

const cryptoRandomString = require('crypto-random-string');
const  sendVerificationEmail  = require('./SendGridEmailHelper').sendVerificationEmail;



module.exports = {
  Register: (req, res) => {
    const {email, salutation, first_name, middle_name, last_name, gender, contact} = req.body;

    //const id = uuidv4();
      const id=null;
    console.log(email);
   
    if (validator.isEmpty(email) || validator.isEmpty(first_name) || validator.isEmpty(gender)) {
      res.json({
        success: false,
        message: 'please fill the required fields',
      });
      return;
    }

    if (!validator.isEmail(email)) {
      res.send({
        success: false,
        Message: 'Invalid email address',
      });
      return;
    }

    let password = req.body.password;
    const salt = setPass.genSalt(16);
    password = setPass.sha512(password, salt);

    const formRegis = {
      email_id:email,
      password,
      verified:'n',
      title: salutation,
      first_name,
      middle_name,
      last_name,
      sex:gender,
      contact,
      salt,
      mail_ver_code: cryptoRandomString({length:16})
    };
    const data = {
      email,
      first_name,
      middle_name,
      last_name,
      salutation,
      contact,
      gender
    };

    authModel.verifyEmail(email)
        .then((r) => {
          if (r.length == 0) {
            authModel.register(formRegis)
                .then(() => {
                  sendVerificationEmail(email, formRegis.mail_ver_code);
                  res.json({
                    success: true,
                    message: 'User registered in successfully',
                    data,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
          } else {
            res.send({
              success: false,
              Message: 'Email has been used',
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
  Login: (req, res) => {
    const {email, password} = req.body;
    
    if (validator.isEmpty(email) || validator.isEmpty(password)) {
      res.json({
        success: false,
        message: 'You did not enter a email or a password.',
      });
      return;
    }
    authModel.verifyEmail(email)
        .then((r) => {
          if (r.length > 0) {
            const salt = r[0].salt;
            const pwHash = r[0].password;
            //const id = r[0].id;
            const verified=r[0].verified;
            const first_name=r[0].first_name;
            const middle_name=r[0].middle_name;
            const last_name=r[0].last_name;
            const salutation=r[0].title;
            const contact=r[0].contact;
            const gender=r[0].sex;

            var name;
            if(r[0].title!=''||r[0].title!=null)
            name = r[0].title+" "+r[0].first_name
            else
            name=r[0].first_name
            if(r[0].middle_name!=''||r[0].middle_name!=null)
            name=name+" "+r[0].middle_name;
            if(r[0].last_name!=''||r[0].last_name!=null)
            name=name+" "+r[0].last_name;

            const value = setPass.sha512(password, salt);
            const dataJWT = {email};

            const data = {
              email,
              name,
              first_name,
              middle_name,
              last_name,
              salutation,
              contact,
              gender
            };

          //  // var details={personal:{}};
          //  var details=new Object();

          //   getDetailModel.getPersonal(email)
          //   .then((r) => {
          //     if (r.length > 0){
          //     details.personal= r[0];
          //     console.log(details);
          //     }

          //   }).
          //   catch((err) => {
          //     console.log(err);
          //   })

          //  console.log(details);
            const token = jwt.sign(dataJWT, configs.jwtSecret, {expiresIn: '1h'});

            if (pwHash == value) {
              if(verified=='n'){
                res.json({
                  success: false,
                  message: `Sorry, verify your email !!!`,
                });
              }
              else{
              res.json({
                success: true,
                message: 'User logged in successfully',
                data,
                // details,
                token,
              });
            }
            } else {
              res.json({
                success: false,
                message: `Sorry, that password isn't right.`,
              });
            }
          } else {
            res.json({
              success: false,
              message: `Sorry, we couldn't find an account with that email.`,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
