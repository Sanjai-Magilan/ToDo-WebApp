const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");  

const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env.development";

dotenv.config({ path: path.resolve(__dirname,"..", envFile) });

const connectDatabase = async () => {
  console.log("Connecting to mongodb...");
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection successfull.");
  } catch (error) {
    console.error("MongoDB Connection Failed.");
    throw error;
  }
};

module.exports = connectDatabase;
