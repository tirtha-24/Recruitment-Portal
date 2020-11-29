/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const applyModel = require('../models/apply');
const uuidv4 = require('uuid/v4'); // input random id dari tiap user

module.exports = {
  apply: (req, res) => {
   const {adv_no, post_name, depName} = JSON.parse(req.body.application);
   const id=req.body.id;
    //const id = uuidv4();
    console.log(req.body);
    //const id=req.body.id;

    

    applyModel.verify(id,adv_no,post_name,depName)
        .then((r) => {
          if (r.length == 0) {
            applyModel.check(id,adv_no,post_name,depName,req,res)
            .then((res)=>{
                var cnt;
                if(res.length===0)
                cnt=0;
                else
                cnt=res[0].sn;

              var app_no="AC20";
              cnt=cnt+1;
              var num=cnt;
              cnt=cnt.toString();
              console.log(cnt)
              cnt=cnt.split("").reverse().join("");
              for(var i=0;i<4;i++)
              if(cnt.length<=i){
                  cnt+="0";
              }
              cnt=cnt.split("").reverse().join("");
              console.log(cnt);
              app_no=app_no+cnt;

            const data = {
                sn:0,
                app_no,
                id,
                adv_no,
                post_name,
                depName,
                app_date:new Date().toISOString().slice(0, 19).replace('T', ' ')
               };
               const number={
                   yr:20,
                   sn:num
               }

               applyModel.apply(data,number)
                .then(() => {
                //   res.send({
                //     success: true,
                //     message: 'You applied successfully',
                //     data,
                //   });
                })
                .catch((err) => {
                  console.log(err);
                });
          })
          .catch((err) => {
            console.log(err);
          });
          res.send({
            success: true,
            message: 'You applied successfully',
          });
        } else {
            res.send({
              success: false,
              message: 'You already applied for the same!!!',
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
};
