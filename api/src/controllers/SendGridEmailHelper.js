require('dotenv').config()
const sendGrid = require('sendgrid').mail;

const sg = require('sendgrid')(process.env.SendGridApiKey);

module.exports={ sendVerificationEmail : (to, token) => {
 // console.log(process.env.SendGridApiKey);
    const hostUrl = process.env.hostURL;
    const request = sg.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: {
        personalizations: [
          {
            to: [
              {
                email: to
              }
            ],
            subject:"Verify Your Email"
          }
        ],
        from: {
          email: "xyz@example.com"
        },
        content: [
      {
        type: 'text/plain',
        value: `Click on this link to verify your email ${hostUrl}/verification?token=${token}&email=${to}`
      }
    ]
      }
    });
    return new Promise(function (resolve, reject) {
      sg.API(request, function (error, response) {
        if (error) {
          console.log(response.status);
          console.log(response.body);
          console.log(response.headers);

          return reject(error);
        }
        else {
          return resolve(response);
        }
      });
    });
  }
}