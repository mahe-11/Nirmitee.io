const { request, response } = require('express')
const express=require('express');
const { getAllCloths } = require('../Controllers/clothController');

const{isAuthenticated}=require('./../MiddleWare/auth')
const router = express.Router();


router.get("/",getAllCloths)

module.exports=router