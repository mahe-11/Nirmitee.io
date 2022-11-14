const mongoose = require("mongoose");

const clothModel=require('./../Models/Cloths')


exports.getAllCloths=async(request,response)=>{

    const cloths=await clothModel.find()
}