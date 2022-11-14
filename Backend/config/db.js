
const mongoose = require("mongoose");
exports.openConnection = () => {

  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => {
      console.log(`Mongo Connected on:${con.connection.port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};


