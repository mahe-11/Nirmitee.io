const { request, response } = require('express')
const express=require('express');
const { getAllCloths, addCloth, deleteCloth, getCloth } = require('../Controllers/clothController');

const{isAuthenticated}=require('./../MiddleWare/auth')
const router = express.Router();


router.get("/",getAllCloths)
router.get("/:id",isAuthenticated,getCloth)
router.post("/add",isAuthenticated,addCloth)
router.delete("/:id",isAuthenticated,deleteCloth)

module.exports=router