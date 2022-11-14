const { request, response } = require('express')
const express=require('express')

const router = express.Router();


router.post("/signup", async (request,response)=>{
    response.send("Success")
})


module.exports =router