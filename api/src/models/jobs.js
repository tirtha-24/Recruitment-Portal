/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
/* eslint-disable max-len */
const conn = require('../configs/db');

module.exports = {
  getOneJob: (id_job) => new Promise((resolve, reject) => {
    conn.query(`SELECT x.id, x.adv_no,y.name_category, x.post_name,\
    z.description_company,z.name_company, z.logo, x.open_date, x.close_date,x.details_path \
    FROM temp_adv_master x \
    JOIN category y \
    ON x.post_type = y.id_category \
    JOIN company z \
    ON z.id_company="7497320a-b09d-46b0-bb0d-ec985126885b" \
    WHERE x.id = ?`, ([id_job]), (err, result) => {   
      console.log('Query result : ');
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  getAllJobs: (searchNameJob, searchNameCategory, sortBy, mode) => new Promise((resolve, reject) => {
    conn.query(`SELECT COUNT (*) as totalData, x.id, x.adv_no,y.name_category, x.post_name,\
     z.description_company,z.name_company, z.logo, x.open_date, x.close_date,x.details_path \
    FROM temp_adv_master x \
    JOIN category y \
    ON x.post_type = y.id_category \
    JOIN company z \
    ON z.id_company="7497320a-b09d-46b0-bb0d-ec985126885b" \
    WHERE x.post_name LIKE ? and y.name_category LIKE ? \
    ORDER BY ${sortBy} ${mode} `, ([searchNameJob, searchNameCategory]), (err, result) => {   
      console.log(`Query result : ${result}`);
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  getJobs: (searchNameJob, searchNameCategory, sortBy, mode, limitStart, eachPage) => new Promise((resolve, reject) => {
    conn.query(`SELECT x.id, x.adv_no,y.name_category, x.post_name,\
    z.description_company,z.name_company, z.logo, x.open_date, x.close_date,x.details_path \
    FROM temp_adv_master  x \
    JOIN category y \
    ON x.post_type = y.id_category \
    JOIN company z \
    ON  z.id_company="7497320a-b09d-46b0-bb0d-ec985126885b" \
    WHERE x.post_name LIKE ? and y.name_category LIKE ? \
    ORDER BY ${sortBy} ${mode} \
    LIMIT ?, ?`, ([searchNameJob, searchNameCategory, parseInt(limitStart), parseInt(eachPage)]), (err, result) => {   
      console.log(`Query result : ${result}`);
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  addJob: (data) => new Promise((resolve, reject) => {
    conn.query('INSERT INTO job SET ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  updateJob: (data, id_job) => new Promise((resolve, reject) => {
    conn.query('UPDATE job SET ? where id_job = ?', [data, id_job], (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  deleteJob: (id_job) => new Promise((resolve, reject) => {
    conn.query('DELETE FROM job WHERE id_job = ?', id_job, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
};