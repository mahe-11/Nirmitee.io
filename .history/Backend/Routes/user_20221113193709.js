const { request, response } = require('express')
const express=require('express');
const { createUser } = require('../Controllers/userController');

const router = express.Router();


router.post("/signup", createUser)


module.exports =router