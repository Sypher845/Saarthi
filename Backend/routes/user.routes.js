import express from "express";
const router = express.Router();
import { body } from "express-validator";
import userController from "../controllers/user.controller.js";

router.post("/register",
  [
    body("fullname.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters"),
  ],
  userController.registerUser
);

export default router;
