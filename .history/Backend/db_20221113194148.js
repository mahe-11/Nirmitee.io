require('dotenv').config({path:'./config/config.env'})
const mongoose = require("mongoose");
exports.openConnection = () => {

  mongoose
    .connect(MONGO_URI)
    .then((con) => {
      console.log(`Mongo Connected on:${con.connection.port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};


