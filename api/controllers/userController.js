import { UserModal } from "../modals/userModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
  static Register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    if (username && email && password && confirmPassword) {
      const user = await UserModal.findOne({ email: email });

      if (!user) {
        if (password === confirmPassword) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const doc = await UserModal.create({
              username,
              email,
              password: hashPassword,
            });
            await doc.save();

            res.send({ status: "success", message: "succesfully registered" });
          } catch (err) {
            res.send({ status: "failed", error: err });
          }
        } else {
          res.send({
            status: "failed",
            message: "password and confirm password are not matched.",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "your Email already registered.",
        });
      }
    } else {
      res.send({ status: "failed", message: "All fields are requireds." });
    }
  };

  static Login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await UserModal.findOne({ email: email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          try {
            const token = await jwt.sign(
              { userId: user._id },
              process.env.SECRET_KEY,
              { expiresIn: "5d" }
            );

            res.cookie("token", token).send({
              status: "success",
              message: "logined succesfully",
              token: token,
              user: {
                id: user._id,
                username: user.username,
                email: user.email,
              },
            });
          } catch (err) {
            res.send({ status: "failed", message: err });
          }
        } else {
          res.send({
            status: "failed",
            message: "Email or Password is not matched.",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "Email or Password is not matched.",
        });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required." });
    }
  };
}

export default UserController;
