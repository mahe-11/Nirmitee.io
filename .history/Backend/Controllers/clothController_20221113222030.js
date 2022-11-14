const mongoose = require("mongoose");

const clothModel=require('./../Models/Cloths')


exports.getAllCloths=async(request,response)=>{

    try {
        const cloths=await clothModel.find()

        if(!cloths)
        {
             response.status(404).json({
                success:false,
                message:"No Cloths!"
             })
        }
    } catch (error) {
        response.status(500).json({
            success: false,
            message: error.message,
          });
    }
   
}