import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, trim: true, unique: true, required: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, required: true },
});

export const UserModal = mongoose.model("Users", userSchema);
