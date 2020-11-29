const conn = require('../configs/db');


module.exports = {
    personal: (data) => new Promise((resolve, reject) => {
        const reg_data={
            title:data.salutation,
            first_name:data.first_name,
            middle_name:data.middle_name,
            last_name:data.last_name,
            contact:data.contact,
            sex:data.sex
        }
        conn.query('UPDATE temp_emp_reg_master SET ? WHERE email_id=?', [reg_data,data.id], (err, result) => {
          if (!err) {
            resolve(result);
          } else {
              console.log(err)
            reject(new Error(err));
          }
        });

        conn.query('DELETE FROM temp_emp_personal_details WHERE id=?', data.id, (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          });
         // console.log(data);
        conn.query('INSERT INTO temp_emp_personal_details SET ?', data, (err, result) => {
            //console.log(data);
          if (!err) {
            //console.log(data);
            resolve(result);
          } else {
            console.log(err);
            reject(new Error(err));
          }
        });

      }),

    address: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_add_master WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.address);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_add_master SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }
    }),

    academics: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_academic WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.academics);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_academic SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }

    }),

    phd: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_phd_details WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      conn.query('DELETE FROM temp_emp_phd_sup WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      
    conn.query('INSERT INTO temp_emp_phd_details SET ?', data.details, (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });

    conn.query('INSERT INTO temp_emp_phd_sup SET ?', data.sup, (err, result) => {
      //console.log(data);
    if (!err) {
      //console.log(data);
      resolve(result);
    } else {
      console.log(err);
      reject(new Error(err));
    }
  });


    }),

    pastemployment: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_past_employment WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.pastemployment);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_past_employment SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }

    }),

    preemployment: (data) => new Promise((resolve, reject) => {

      console.log(data);
      conn.query('DELETE FROM temp_emp_pre_employment WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    

    conn.query('INSERT INTO temp_emp_pre_employment SET ?', JSON.parse(data.preemployment), (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });

    }),

    adminexperience: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_admin_exp_details WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.adminexperience);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_admin_exp_details SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
     }

    }),

    consultancyprojects: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_cons_project WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.consultancyprojects);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_cons_project SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
     }


    }),

    outreachyprojects: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_outreach_project WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.outreachyprojects);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_outreach_project SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
     }


    }),

    rdprojects: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_rd_project WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.rdprojects);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_rd_project SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
     }

      

    }),

    facultymobilityprog: (data) => new Promise((resolve, reject) => {

    }),

    innovproddev: (data) => new Promise((resolve, reject) => {

    }),

    professionalbodies: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_prof_body WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.professionalbodies);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_prof_body SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }

    }),

    publications: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_publication WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.publications);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_publication SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
  
    });
    }
    }),

    qualityresearchpublications: (data) => new Promise((resolve, reject) => {

    }),

    patent: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_patent WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.patent);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_patent SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }

    }),

    reference: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_emp_reference WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.reference);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_reference SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }

    }),

    specialawards: (data) => new Promise((resolve, reject) => {
      console.log(data.id);
      conn.query('DELETE FROM temp_special_award WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = JSON.parse(data.specialawards);
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_special_award SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }

      

    }),

    handwritten: (data) => new Promise((resolve, reject) => {

      console.log(data.id);
      conn.query('DELETE FROM temp_emp_handwritten WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = data.upload;
    
    conn.query('INSERT INTO temp_emp_handwritten SET ?', data_insert, (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });


    }),

    otherinfo: (data) => new Promise((resolve, reject) => {

      console.log(data);
      conn.query('DELETE FROM temp_emp_any_other_info WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    

    conn.query('INSERT INTO temp_emp_any_other_info SET ?', JSON.parse(data.any_other_info), (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });


    }),

    upload: (data) => new Promise((resolve, reject) => {

      console.log(data.id);
      conn.query('DELETE FROM temp_emp_photo_sign WHERE id=?', data.id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
      const data_insert = data.upload;
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
    conn.query('INSERT INTO temp_emp_photo_sign SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }

      

    }),

    documents: (data) => new Promise((resolve, reject) => {

      console.log(data.id);
      conn.query('DELETE FROM temp_emp_uploads WHERE id=? and d_type=?', [data.id,data.upload[0].d_type], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });

        var count=0;
      conn.query('SELECT COUNT(id) AS counts FROM temp_emp_uploads WHERE id=?', data.id, (err, result) => {
        if (!err) {
          console.log(result);
          count=result.counts;
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });

      const data_insert = data.upload;
     console.log(data_insert);
     for(i=0;i<data_insert.length;i++){
       data_insert[i].sn=count+1+i;
    conn.query('INSERT INTO temp_emp_uploads SET ?', data_insert[i], (err, result) => {
        //console.log(data);
      if (!err) {
        //console.log(data);
        resolve(result);
      } else {
        console.log(err);
        reject(new Error(err));
      }
    });
  }

      

    })
      
    };