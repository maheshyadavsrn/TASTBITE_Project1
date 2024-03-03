import mongoose from "mongoose";


export const dbConnection = async() => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
  };