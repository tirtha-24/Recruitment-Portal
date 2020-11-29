const authModel = require('../models/auth');

module.exports={ 
    verification: (req, res) => {
    const {email, token} = req.query;
    console.log(email);
    console.log(token);
    
    // if (validator.isEmpty(email) || validator.isEmpty(password)) {
    //   res.json({
    //     success: false,
    //     message: 'You did not enter a email or a password.',
    //   });
    //   return;
    // }
    authModel.verifyEmail(email,token)
        .then((r) => {
          if (r.length > 0) {
           
            const verified=r[0].verified;
            const mail_ver_code=r[0].mail_ver_code;
            
            if(verified=='y'){
                return res.status(403).json(`User with ${email} has already been verified`);
            }
            else if (token == mail_ver_code) {
                const data={
                    email:email
                }
                authModel.verify(data);
                return res.status(403).json(`User with ${email} has been verified`);
            } 
            else{
                return res.status(403).json(`Verification failed`);
            } 
        }
        })
        .catch((err) => {
          console.log(err);
        });
  }
}
