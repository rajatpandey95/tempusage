const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Trying to connect");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected");
  } catch (error) {
    console.log("Error while connecting database");
    console.log(error);
  }
};

exports.connectDB = connectDB;
