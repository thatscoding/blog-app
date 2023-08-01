import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(UserController.Register);
router.route("/login").post(UserController.Login);

export default router;
