
const mongoose = require("mongoose");
exports.openConnection = () => {

  mongoose
    .connect("mongodb://localhost:27017/clothShop")
    .then((con) => {
      console.log(`Mongo Connected on:${con.connection.port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.closeConnection=()=>{
    mongoose.disconnect().then(()=>{console.log('Connection closed')})

}
