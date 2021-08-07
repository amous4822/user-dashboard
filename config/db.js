const mongoose = require("mongoose");
const config = require("./default.json");

const connectDB = async () => {
  await mongoose
    .connect(config.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
