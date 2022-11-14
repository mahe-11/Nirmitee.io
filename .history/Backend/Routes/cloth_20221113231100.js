const { request, response } = require('express')
const express=require('express');
const { getAllCloths, addCloth, deleteCloth, getCloth, updateCloth } = require('../Controllers/clothController');

const{isAuthenticated}=require('./../MiddleWare/auth')
const router = express.Router();


router.get("/",getAllCloths)
router.get("/:id",getCloth)
router.post("/add",isAuthenticated,addCloth)
router.delete("/:id",isAuthenticated,deleteCloth)
router.post("/udpateCloth/:id",isAuthenticated,updateCloth)

module.exports=router