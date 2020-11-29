const conn = require('../configs/db');

module.exports = {
  getStates: () => new Promise((resolve, reject) => {
   // console.log(email);
    conn.query('SELECT * FROM temp_emp_states',(err, result) => {
      if (!err) {
         // console.log(result)
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  })
  
};