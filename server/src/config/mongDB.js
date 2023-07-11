const mongoose = require("mongoose");

const env = require("../constants/env");

const mongoDB = () =>
  mongoose
    .connect(env.DB_CONNECTION)
    .then(() => {
      console.log("Database Connected Sucessfully");
    })
    .catch((err) => {
      console.log(err);
      console.log("Error Occured");
    });

module.exports = mongoDB;
