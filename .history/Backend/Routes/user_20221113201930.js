const { request, response } = require('express')
const express=require('express');
const { createUser, loginUser, logoutUser } = require('../Controllers/userController');

const router = express.Router();


router.post("/signup", createUser)
router.post("/login", loginUser)
router.post("/logout",isAuthenticated,logoutUser)


module.exports =router