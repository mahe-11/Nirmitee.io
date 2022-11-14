const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require('./../Models/User')
const jwt=require('jsonwebtoken')


exports.loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await userModel.findOne({ email: email });
    console.log(user)
    
   
    if (!user) {
      response.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
    {
      response.status(404).json({
        success: false,
        message: "Wrong Password",
      });
    }
    else{
      const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
      const options={
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
      response.status(200).cookie("token",token,options).json({
        success:true,
        message:'login Successful',
        token:token
      })
    }
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createUser = async (request, response) => {
  try {
    const { name, email, password,role } = request.body;
    let user = await userModel.findOne({ email: email });
    if (user) {
      response.status(400).json({
        success: false,
        message: "User already Exists!",
      });
    } else {
      user = await userModel.create({
        name: name,
        email: email,
        password: password,
        role:role,
      });
      
            response.status(200).json({
                success:true,
                message:"User Created!"
            })
    }
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
