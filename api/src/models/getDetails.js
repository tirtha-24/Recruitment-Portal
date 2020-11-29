const conn = require('../configs/db');

module.exports = {
  getPersonal: (email) => new Promise((resolve, reject) => {
   // console.log(email);
    conn.query('SELECT * FROM temp_emp_personal_details WHERE id = ?', email, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),

  getAddress: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_add_master WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),

  getAcademics: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_academic WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getPhd_details: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_phd_details WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),

  getPhd_sup: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_phd_sup WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getPastemployment: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_past_employment WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getPreemployment: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_pre_employment WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getAdminexperience: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_admin_exp_details WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getConsultancyprojects: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_cons_project WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getOutreachyprojects: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_outreach_project WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });


  }),

  getRdprojects: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_rd_project WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });


  }),

  getFacultymobilityprog: (data) => new Promise((resolve, reject) => {

  }),

  getInnovproddev: (data) => new Promise((resolve, reject) => {

  }),

  getProfessionalbodies: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_prof_body WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getPublications: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_publication WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getQualityresearchpublications: (data) => new Promise((resolve, reject) => {
  

  }),

  getPatent: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_patent WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),

  getReference: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_reference WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
 

  }),

  getSpecialawards: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_special_award  WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getHandwritten: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_handwritten WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getOtherinfo: (data) => new Promise((resolve, reject) => {

    conn.query('SELECT * FROM temp_emp_any_other_info WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });

  }),

  getUpload: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_photo_sign WHERE id = ?', data, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),

  getDocuments: (data) => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM temp_emp_uploads WHERE id = ?', data, (err, result) => {
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
  
  getAllApplication: (id) => new Promise((resolve, reject) => {
    conn.query(`SELECT COUNT (*) as totalData, x.app_no, x.adv_no, x.post_name,\
     x.depName,x.app_date, z.rec_status,z.short_status\
    FROM temp_emp_applied_for x \
    JOIN f_emp_form_status z \
    ON z.app_no=x.app_no \
    WHERE x.id=?`,id, (err, result) => {   
      console.log(`Query result : ${result}`);
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  getApplication: (id,limitStart,eachPage) => new Promise((resolve, reject) => {
    conn.query(`SELECT x.app_no, x.adv_no, x.post_name,\
    x.depName,x.app_date, z.rec_status,z.short_status\
    FROM temp_emp_applied_for x \
    JOIN f_emp_form_status z \
    ON z.app_no=x.app_no \
    WHERE x.id=? \
    LIMIT ?, ?`, ([id,parseInt(limitStart), parseInt(eachPage)]), (err, result) => {   
      console.log(`Query result : ${result}`);
      if (!err) {
        resolve(result);
      } else {
        reject(new Error(err));
      }
    });
  }),
  
};