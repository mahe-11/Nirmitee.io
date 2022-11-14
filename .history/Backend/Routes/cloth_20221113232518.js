const { request, response } = require('express')
const express=require('express');
const { getAllCloths, addCloth, deleteCloth, getCloth, updateCloth, priceFilter } = require('../Controllers/clothController');

const{isAuthenticated}=require('./../MiddleWare/auth')
const router = express.Router();


router.get("/",getAllCloths)
router.get("/:id",getCloth)
router.post("/add",isAuthenticated,addCloth)
router.delete("/:id",isAuthenticated,deleteCloth)
router.put("/:id",isAuthenticated,updateCloth)

router.get("/price",priceFilter)

module.exports=router