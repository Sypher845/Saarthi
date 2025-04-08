import express from "express";
const router = express.Router();
import { body } from "express-validator";
import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

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

router.post("/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters"),
  ],
  userController.loginUser
);

router.get("/profile",authMiddleware.authUser,userController.getUserProfile);

router.get("/logout",authMiddleware.authUser,userController.logoutUser);

export default router;
