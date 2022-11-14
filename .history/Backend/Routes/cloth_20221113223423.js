const { request, response } = require('express')
const express=require('express');
const { getAllCloths, addCloth } = require('../Controllers/clothController');

const{isAuthenticated}=require('./../MiddleWare/auth')
const router = express.Router();


router.get("/",getAllCloths)
router.post("/add",isAuthenticated,addCloth)
router.delete("/delete/:id",isAuthenticated,deleteCloth)

module.exports=router