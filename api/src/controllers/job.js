/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const jobModels = require('../models/jobs');
const uuidv4 = require('uuid/v4'); // input random id dari tiap user
// const redis = require('../helpers/redis');
const API="http://localhost:8000"

module.exports = {
  getOneJob: (req, res) =>{
    const id_job = req.params.id_job;
    jobModels.getOneJob(id_job)
        .then((result) => {
          // redis.delRedis();
          res.json({
            result,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  
  getJobs: (req, res) => {
    const {sortName, sortCategory, date_update} = req.query;
    let {searchNameJob, searchNameCategory, page, eachPage} = req.query;

    let sortBy;
    let mode;
    //console.log(7)
    if (sortName === undefined && sortCategory === undefined && date_update !== undefined) {
      sortBy = 'x.open_date';
      mode = date_update;
    } else if (sortName === undefined && sortCategory !== undefined && date_update === undefined) {
      sortBy = 'y.post_type';
      mode = 'ASC';
    } else if (sortName !== undefined && sortCategory === undefined && date_update === undefined) {
      sortBy = 'x.post_name';
      mode = 'ASC';
    } else {
      sortBy = 'x.open_date';
      mode = 'DESC';
    }

    if (searchNameJob == undefined) {
      searchNameJob = '%%';
    } else {
      searchNameJob = '%' + searchNameJob + '%';
    }
    if (searchNameCategory == undefined) {
      searchNameCategory = '%%';
    } else {
      searchNameCategory = '%' + searchNameCategory + '%';
    }

    if (page === undefined || parseInt(page) == 0 ) {
      page = 1;
    }
    if (eachPage === undefined || parseInt(eachPage) == 0 ) {
      eachPage = 10;
    }
    
    const limitStart = (parseInt(page)-1)*parseInt(eachPage);
    
    jobModels.getAllJobs(searchNameJob, searchNameCategory, sortBy, mode)
        .then((r) => {
          const totalData = r[0].totalData;
          jobModels.getJobs(searchNameJob, searchNameCategory, sortBy, mode, limitStart, eachPage)
              .then((result) => {
                if (result.length != 0) {
                  const totalPage = Math.ceil(totalData/eachPage);
                  const key = req.originalUrl;
                  
                  if (eachPage>totalData) {
                    eachPage = totalData;
                  }
                  const currentPage = parseInt(page);
                  let prev = '';
                  if (page > 1) {
                    prevPage = currentPage - 1;
                    prev = `${API}/job/?page=${prevPage}`;
                  } else {
                    prev = '';
                  }
                  
                  let next = '';
                  if (currentPage < totalPage) {
                    nextPage = currentPage+1;
                    next = `${API}/job/?page=${nextPage}`;
                  } else {
                    next = '';
                  }
                  // redis.setExp(key, JSON.stringify({
                  //   info: {
                  //     totalData,
                  //     eachPage,
                  //     page,
                  //     totalPage,
                  //     prev,
                  //     next,
                  //   },
                  //   result,
                  // }));
              
                  res.json({
                    info: {
                      totalData,
                      eachPage,
                      page,
                      totalPage,
                      prev,
                      next,
                    },
                    result,
                  });
                } else {
                  res.send('NOT FOUND');
                }
              })
              .catch((err) => {
                console.log(err);
              });
        });
  },  
  addJob: (req, res) => {
    const {name_job, description_job, category, salary, location_job, company} = req.body;
    const id_job = uuidv4();
    const data = {
      id_job,
      name_job,
      description_job,
      category,
      salary,
      location_job,
      company,
      date_add: new Date(),
      date_update: new Date(),
      logo:`${API}/src/images/logo.png`
    };
    jobModels.addJob(data)
        .then((result) => {
          // redis.delRedis();
          res.json({
            success: true,
            message: 'success added new job',
            result: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  updateJob: (req, res) => {
    const id_job = req.params.id_job;
    const data = req.body;
    const date_update = new Date();
    data.date_update = date_update;

    jobModels.updateJob(data, id_job)
        .then((result) => {
          // redis.delRedis();
          console.log(data)
          res.json({
            success: true,
            message: 'success updated job',
            result: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  deleteJob: (req, res) => {
    const id_job = req.params.id_job;

    jobModels.deleteJob(id_job)
        .then((result) => {
          // redis.delRedis();
          res.json({
            success: true,
            message: 'success deleted job',
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
