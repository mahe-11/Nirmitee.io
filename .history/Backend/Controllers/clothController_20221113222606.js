const mongoose = require("mongoose");

const clothModel = require("./../Models/Cloths");

exports.getAllCloths = async (request, response) => {
  try {
    const cloths = await clothModel.find();

    if (cloths.length==0) {
      response.status(404).json({
        success: false,
        message: "No Cloths!",
      });
    }

    response.status(200).json({
      success: true,
      data: cloths,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addCloth = async (request, response) => {
  try {
    const user = request.user;
    console.log(user.role)
    if (user.role != "admin") {
      response.status(400).json({
        success: false,
        message: "Access denied!",
      });
      
    }
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
