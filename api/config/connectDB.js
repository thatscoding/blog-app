import mongoose from "mongoose";

export const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("DB connected succesfully");
  } catch (error) {
    console.log(error);
  }
};
