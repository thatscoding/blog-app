// imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";

//config
dotenv.config();
const server = express();

//middlewares
server.use(cors());
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Api end points
server.use("/api/user", userRoute);
server.use("/api", postRoute);

// Envirnment variables
const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URL;

// connect DB
connectDB(DB_URL);

// server listener
server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening at http://localhost:${PORT}`);
});
