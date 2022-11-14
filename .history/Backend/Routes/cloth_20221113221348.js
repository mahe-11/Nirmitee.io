const { request, response } = require('express')
const express=require('express');

const{isAuthenticated}=require('./../MiddleWare/auth')
const router = express.Router();




module.exports=router