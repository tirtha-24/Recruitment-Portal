/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
const detailModel = require('../models/details');
const setPass = require('../helpers/index');
const jwt = require('jsonwebtoken');
const configs = require('../configs/configs');
const validator = require('validator');
const uuidv4 = require('uuid/v4'); 


module.exports = {
    Personal: (req, res) => {
      const data = req.body;
  
      //const id = uuidv4();
        const id=null;
  
     if(data.category==='Select'){
        res.send({
                  success: false,
                  Message: 'Select a valid category',
                });
                return;
     }
     if(data.pwd_status==='Yes'&&(data.pwd_percent==''||data.pwd_percent==null)){
        res.send({
                  success: false,
                  Message: 'Please fill the pwd percent, if pwd status clicked yes!!!',
                });
                return;
     }
  
      const formPersonal = {
        ...data,
        sex: data.gender,
        id: data.email
      };

      delete formPersonal.gender;
      delete formPersonal.email;

  
      detailModel.personal(formPersonal)
        .then(() => {
            res.json({
                success: true,
                message: 'Personal details saved successfully',
                data,
                });
              })                
            .catch((err) => {
            console.log(err);
      });
    },

    Address: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.address(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Address saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });


    },

    Academics: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.academics(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Academics details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });
    },

    Phd: (req, res) => {
      const data= req.body;
      console.log(data);
      const details={
        id:data.id,
        university: data.university,
        subject: data.subject,
        enr_date: data.enr_date,
        award_date: data.award_date,
        cpi_cgpa: data.cpi_cgpa,
        scale_cpi_cgpa: data.scale_cpi_cgpa
      }
      const sup={
        id:data.id,
        phd_type: data.phd_type,
        sole_guide: data.sole_guide,
        principal_guide: data.principal_guide,
        co_guide: data.co_guide
      }
      const data_insert={
        id:data.id,
        details:details,
        sup:sup
      }
      detailModel.phd(data_insert)
      .then(() => {
          res.json({
              success: true,
              message: 'Phd details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Pastemployment: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.pastemployment(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Past Employments details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Preemployment: (req, res) => {
      const data= req.body;
      // console.log(req.body);
      // const data={
      //   id,
      //   preemployment
      // }
      console.log(data);
      detailModel.preemployment(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Pre Employment details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Adminexperience: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.adminexperience(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Administrative Experience details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Consultancyprojects: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.consultancyprojects(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Consultancy Projects details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Outreachyprojects: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.outreachyprojects(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Outreachy Projects details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Rdprojects: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.rdprojects(data)
      .then(() => {
          res.json({
              success: true,
              message: 'RD Projects details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Facultymobilityprog: (req, res) => {

    },

    Innovproddev: (req, res) => {

    },

    Professionalbodies: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.professionalbodies(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Professional Bodies details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });


    },

    Publications: (req, res) => {

      const data= req.body;
      console.log(data);
      detailModel.publications(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Publications details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });
    },

    Qualityresearchpublications: (req, res) => {

    },

    Patent: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.patent(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Patent details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Reference: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.reference(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Reference details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    Specialawards: (req, res) => {
      const data= req.body;
      console.log(data);
      detailModel.specialawards(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Special Awards details saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    // Handwritten: (req, res) => {

    // },

    Otherinfo: (req, res) => {

      const data= req.body;
      
      console.log(data);
      detailModel.otherinfo(data)
      .then(() => {
          res.json({
              success: true,
              message: 'Other information saved successfully',
              data,
              });
            })                
          .catch((err) => {
          console.log(err);
    });

    },

    // Upload: (req, res) => {

    // }

};
