const express = require('express');
const bodyParser = require('body-parser');
const configs = require('./src/configs/configs');
const path = require('path');

const app = express();
const port = configs.port;
const routerNav = require('./src/index');
const logger = require('morgan');
const cors = require('cors');
var multer = require('multer')
const fs=require('fs')

const details=require('./src/models/details');

const verification=require('./src/controllers/verification');


app.listen(port, () => {
  console.log(`\nServer listening on port ${port}`);
});

app.use('/src/images', express.static(path.join(__dirname, '/src/images')));
app.use('/public/uploads', express.static(path.join(__dirname, '/public/uploads')));
app.use('/public/uploads/adv', express.static(path.join(__dirname, '/public/uploads/adv')));
app.use('/public/handwritten', express.static(path.join(__dirname, '/public/handwritten')));
app.use('/public/documents', express.static(path.join(__dirname, '/public/documents')));



app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `public/uploads`
    console.log(dir);
   cb(null, dir)
},
filename: function (req, file,cb) {
  cb(null, `${req.body.id}-`+Date.now() + '-' +file.originalname )
 // console.log(req);
}
})

var upload = multer({ storage: storage })

app.post('/upload',upload.array('file'),function(req, res) {
 // console.log(req.files); 
  console.log(req.files);
  var data=req.body;
  console.log(data)
  data.upload=JSON.parse(data.upload)
  for(var i=0;i<data.upload.length;i++){
    data.upload[i].d_path=req.files[i].path;
  }
  details.upload(data);
});

var storageh = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `public/handwritten`
    console.log(dir);
   cb(null, dir)
},
filename: function (req, file,cb) {
  cb(null, `${req.body.id}-`+Date.now() + '-' +file.originalname )
 // console.log(req);
}
})

var uploadh = multer({ storage: storageh })

app.post('/handwritten',uploadh.single('file'),function(req, res) {
  // console.log(req.files); 
   console.log(req.file);
   var data=req.body;
   console.log(data.upload)
   data.upload=JSON.parse(data.upload)
   data.upload.d_path=req.file.path;
  
   details.handwritten(data);
 });


 var storaged = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `public/documents`
    console.log(dir);
   cb(null, dir)
},
filename: function (req, file,cb) {
  cb(null, `${req.body.id}-`+Date.now() + '-' +file.originalname )
 // console.log(req);
}
})

var uploadd = multer({ storage: storaged })

app.post('/documents',uploadd.array('file'),function(req, res) {
  console.log(req.files); 
  // console.log(req.file);
   var data=req.body;
   console.log(data.id)
  // console.log(data);
   data.upload=JSON.parse(data.upload)
   console.log(data.upload)
   for(var i=0;i<req.files.length;i++){
    data.upload[i].d_path=req.files[i].path;
  }
  
   details.documents(data);
 });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));
app.use('/', routerNav);

module.exports = app;
