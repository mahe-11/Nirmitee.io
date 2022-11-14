const mongoose = require("mongoose");

const clothModel = require("./../Models/Cloths");

exports.getAllCloths = async (request, response) => {
  try {
    const cloths = await clothModel.find();

    if (cloths.length == 0) {
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
    const { name, brand, category, price, color, size, extras } = request.body;
    const user = request.user;
    console.log(user.role);
    if (user.role != "admin") {
      response.status(400).json({
        success: false,
        message: "Access denied!",
      });
    } else {
      await clothModel.create({
        name: name,
        brand: brand,
        category: category,
        price: price,
        color: color,
        size: size,
        extras: extras,
      });
      response.status(200).json({
        success: true,
        message: "Cloth Added",
      });
    }
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteCloth = async (request, response) => {
  try {
    const { id } = request.params;
    const user = request.user;
    if (user.role != "admin") {
      response.status(400).json({
        success: false,
        message: "Access denied!",
      });
    }
    else{
        await clothModel.deleteOne({_id:id})

        response.status(200).json({
            success: true,
            message: "Cloth Deleted",
          });
    }
    
  } catch (error) {}
};
exports.getCloth=async(request,response)=>{
    const {id}=request.params
}