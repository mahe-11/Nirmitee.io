const { request, response } = require('express')
const express=require('express');
const { getAllCloths, addCloth, deleteCloth, getCloth, updateCloth, priceFilter } = require('../Controllers/clothController');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const{isAuthenticated}=require('./../MiddleWare/auth')
const router = express.Router();


router.get("/",getAllCloths)
router.get("/:id",getCloth)
router.get("/filter",priceFilter)
router.post("/add",isAuthenticated,addCloth)
router.delete("/:id",isAuthenticated,deleteCloth)
router.put("/:id",isAuthenticated,updateCloth)



module.exports=router