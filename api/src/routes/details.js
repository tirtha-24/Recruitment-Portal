/* eslint-disable new-cap */
const express = require('express');
const Route = express.Router();

const detailController = require('../controllers/details');
const getDetailController = require('../controllers/getDetails');

console.log('bbb');
Route
    .get('/application/:id', getDetailController.getApplication)
    .get('/personal/:id', getDetailController.getPersonal)
    .get('/address/:id', getDetailController.getAddress)
    .get('/academics/:id', getDetailController.getAcademics)
    .get('/phd_details/:id', getDetailController.getPhd_details)
    .get('/phd_sup/:id', getDetailController.getPhd_sup)
    .get('/pastemployment/:id', getDetailController.getPastemployment)
    .get('/preemployment/:id', getDetailController.getPreemployment)
    .get('/adminexperience/:id', getDetailController.getAdminexperience)
    .get('/consultancyprojects/:id', getDetailController.getConsultancyprojects)
    .get('/outreachyprojects/:id', getDetailController.getOutreachyprojects)
    .get('/rdprojects/:id', getDetailController.getRdprojects)
    .get('/facultymobilityprog/:id', getDetailController.getFacultymobilityprog)
    .get('/innovproddev/:id', getDetailController.getInnovproddev)
    .get('/professionalbodies/:id', getDetailController.getProfessionalbodies)
    .get('/publications/:id', getDetailController.getPublications)
    .get('/qualityresearchpublications/:id', getDetailController.getQualityresearchpublications)
    .get('/patent/:id', getDetailController.getPatent)
    .get('/reference/:id', getDetailController.getReference)
    .get('/specialawards/:id', getDetailController.getSpecialawards)
    .get('/handwritten/:id', getDetailController.getHandwritten)
    .get('/otherinfo/:id', getDetailController.getOtherinfo)
    .get('/upload/:id', getDetailController.getUpload)
    .get('/documents/:id', getDetailController.getDocuments)
    .post('/personal', detailController.Personal)
    .post('/address', detailController.Address)
    .post('/academics', detailController.Academics)
    .post('/phd', detailController.Phd)
    .post('/pastemployment', detailController.Pastemployment)
    .post('/preemployment', detailController.Preemployment)
    .post('/adminexperience', detailController.Adminexperience)
    .post('/consultancyprojects', detailController.Consultancyprojects)
    .post('/outreachyprojects', detailController.Outreachyprojects)
    .post('/rdprojects', detailController.Rdprojects)
    .post('/facultymobilityprog', detailController.Facultymobilityprog)
    .post('/innovproddev', detailController.Innovproddev)
    .post('/professionalbodies', detailController.Professionalbodies)
    .post('/publications', detailController.Publications)
    .post('/qualityresearchpublications', detailController.Qualityresearchpublications)
    .post('/patent', detailController.Patent)
    .post('/reference', detailController.Reference)
    .post('/specialawards', detailController.Specialawards)
    .post('/otherinfo', detailController.Otherinfo)
   

module.exports = Route;