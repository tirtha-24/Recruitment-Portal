const conn = require('../configs/db');
module.exports = {
    verify: (id,adv_no,post_name,depName) => new Promise((resolve, reject) => {
      conn.query('SELECT * FROM temp_emp_applied_for WHERE id = ? and adv_no = ? and post_name= ? and depName= ?', [id,adv_no,post_name,depName], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    }),
    check: () => new Promise((resolve, reject) => {
        conn.query('SELECT * FROM temp_emp_app_no WHERE yr=20',(err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        });
      }),
    apply: (data,number) => new Promise((resolve, reject) => {
    
        conn.query('INSERT INTO temp_emp_applied_for SET ?', data, (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        });

        conn.query('INSERT INTO f_emp_applied_for SET ?', data, (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          });


        conn.query('DELETE FROM temp_emp_app_no WHERE yr=20', (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          });

        conn.query('INSERT INTO temp_emp_app_no SET ?', number, (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        });

        const data_insert={
            app_no:data.app_no,
            rec_status:1,
            pay_status:1,
            short_status:0,
        }

        conn.query('INSERT INTO f_emp_form_status SET ?', data_insert, (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          });

        conn.query('SELECT * from temp_emp_personal_details WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_personal_details SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_add_master WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_add_master SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_academic WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_academic SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_uploads WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_uploads SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_phd_details WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_phd_details SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_phd_sup WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_phd_sup SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_past_employment WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_past_employment SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_pre_employment WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_pre_employment SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_admin_exp_details WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_admin_exp_details SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_cons_project WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_cons_project SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_outreach_project WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_outreach_project SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_rd_project WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_rd_project SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_prof_body WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_prof_body SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });


          conn.query('SELECT * from temp_emp_publication WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_publication SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });


          conn.query('SELECT * from temp_emp_patent WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_patent SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_reference WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_reference SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_special_award WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_special_award SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_handwritten WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_handwritten SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_any_other_info WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_any_other_info SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });

          conn.query('SELECT * from temp_emp_photo_sign WHERE id=?', data.id, (err, result) => {
            if (!err) {
             for(var i=0;i<result.length;i++){
                 var data_apply=result[i];
                 data_apply.app_no=data.app_no;
                 delete data_apply.id;
                conn.query('INSERT INTO f_emp_photo_sign SET ?', data_apply, (err, result) => {
                    if (!err) {
                      resolve(result);
                    } else {
                      reject(new Error(err));
                    }
                  });
             }
            } else {
              reject(new Error(err));
            }
          });
          
        

      }),
}