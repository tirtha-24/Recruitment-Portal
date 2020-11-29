const getDetailModel = require('../models/getDetails');

module.exports={
    getPersonal: (req, res) => {
        const data=req.params.id;
        console.log(req.params.id)
        getDetailModel.getPersonal(data)
        .then((r) => {
        var data;
        var status;
        if (r.length > 0){
        data=r[0];
        status=true
        var name;
        if(r[0].salutation!=''||r[0].salutation!=null)
        name = r[0].salutation+" "+r[0].first_name
        else
        name=r[0].first_name
        if(r[0].middle_name!=''||r[0].middle_name!=null)
        name=name+" "+r[0].middle_name;
        if(r[0].last_name!=''||r[0].last_name!=null)
        name=name+" "+r[0].last_name;
        data.name=name;
        console.log(data);
        }
        else{
        data={}
        status=false
        }
        //data={email:"a"};
        console.log(data);
          res.json({
            status,
            result: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getAddress: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getAddress(data)
      .then((r) => {
      var data={};
      var status;
      if (r.length > 0){
      status=true
      if(r[0].add_type==='c')
      [r[0],r[1]]=[r[1],r[0]];

      data.p_add_line1=r[0].add_line1;
      data.p_add_line2=r[0].add_line2;
      data.p_city=r[0].city;
      data.p_state=r[0].state;
      data.p_pin=r[0].pin;

      data.c_add_line1=r[1].add_line1;
      data.c_add_line2=r[1].add_line2;
      data.c_city=r[1].city;
      data.c_state=r[1].state;
      data.c_pin=r[1].pin;

      }
      else{
      data={}
      status=false
      }
      //data={email:"a"};
      console.log(data);
        res.json({
          status,
          result: data
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getAcademics: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getAcademics(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getPhd_details: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getPhd_details(data)
      .then((r) => {
      var result={};
      var status;
      if (r.length > 0){
      status=true
      result=r[0];
      }
      else{
      result={}
      status=false
      }
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getPhd_sup: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getPhd_sup(data)
      .then((r) => {
      var result={};
      var status;
      if (r.length > 0){
      status=true
      result=r[0];
      }
      else{
      result={}
      status=false
      }
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getPastemployment: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getPastemployment(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getPreemployment: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getPreemployment(data)
      .then((r) => {
      var result={};
      var status;
      if (r.length > 0){
      status=true
      result=r[0];
      }
      else{
      result={}
      status=false
      }
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });


    },

    getAdminexperience: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getAdminexperience(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getConsultancyprojects: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getConsultancyprojects(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });


    },

    getOutreachyprojects: (req, res) => {

      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getOutreachyprojects(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getRdprojects: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getRdprojects(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });


    },

    getFacultymobilityprog: (req, res) => {

    },

    getInnovproddev: (req, res) => {

    },

    getProfessionalbodies: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getProfessionalbodies(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getPublications: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getPublications(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getQualityresearchpublications: (req, res) => {

    },

    getPatent: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getPatent(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getReference: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getReference(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getSpecialawards: (req, res) => {
      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getSpecialawards(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getHandwritten: (req, res) => {

      const data=req.params.id;
      //console.log(req.params.id)
      console.log(5);
      getDetailModel.getHandwritten(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r[0];
      }
      else{
      result={}
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });


    },

    getOtherinfo: (req, res) => {

      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getOtherinfo(data)
      .then((r) => {
      var result={};
      var status;
      if (r.length > 0){
      status=true
      result=r[0];
      }
      else{
      result={}
      status=false
      }
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getUpload: (req, res) => {

      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getUpload(data)
      .then((r) => {
      var result;
      var status;
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      //console.log(data);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getDocuments: (req, res) => {

      const data=req.params.id;
      console.log(req.params.id)
      getDetailModel.getDocuments(data)
      .then((r) => {
      var result;
      var status;
      //console.log(r);
      if (r.length > 0){
      status=true
      result=r;
      }
      else{
      result=[]
      status=false
      }
      //data={email:"a"};
      console.log(result);
        res.json({
          status,
          result
        });
      })
      .catch((err) => {
        console.log(err);
      });

    },

    getApplication: (req, res) => {
     
        page = 1;
        eachPage = 10;
     const id=req.params.id;
      
      const limitStart = (parseInt(page)-1)*parseInt(eachPage);
      
      getDetailModel.getAllApplication(id)
          .then((r) => {
            const totalData = r[0].totalData;
            getDetailModel.getApplication(id,limitStart, eachPage)
                .then((result) => {
                  if (result.length != 0) {
                    const totalPage = Math.ceil(totalData/eachPage);
                    const key = req.originalUrl;
                    console.log(result.length)
                    
                    if (eachPage>totalData) {
                      eachPage = totalData;
                    }
                    const currentPage = parseInt(page);
                    let prev = '';
                    if (page > 1) {
                      prevPage = currentPage - 1;
                      prev = `${API}/application/?page=${prevPage}`;
                    } else {
                      prev = '';
                    }
                    
                    let next = '';
                    if (currentPage < totalPage) {
                      nextPage = currentPage+1;
                      next = `${API}/application/?page=${nextPage}`;
                    } else {
                      next = '';
                    }

                    for(var i=0;i<result.length;i++){
                      if(result[i].short_status===1)
                      result[i].status="Shortlisted"
                      else
                      result[i].status="Received"
                    }
                
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

};