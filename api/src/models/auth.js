const conn = require('../configs/db');

module.exports = {
  verifyEmail: (email) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_reg_master WHERE email_id = ?', email, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  register: (data) => new Promise((resolve, reject) => {
    const personal_details={
      id: data.email_id,
      salutation: data.title,
      first_name: data.first_name,
      middle_name: data.middle_name,
      last_name: data.last_name,
      sex: data.sex,
      contact: data.contact
    }
    conn.query('INSERT INTO temp_emp_reg_master SET ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
    conn.query('INSERT INTO temp_emp_personal_details SET ?', personal_details, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),

  verify: (data) => new Promise((resolve, reject) => {
    const details={
      verified: 'y',
    }
    conn.query('UPDATE temp_emp_reg_master SET ? WHERE email_id=?', [details,data.email], (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
   
  }),
};