const conn = require('../configs/db');

module.exports = {
  getDepartments: () => new Promise((resolve, reject) => {
   // console.log(email);
    conn.query('SELECT * FROM cbcs_departments',(err, result) => {
      if (!err) {
         // console.log(result)
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  })
  
};