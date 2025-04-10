import userModel from "../models/user.model.js";
import blacklistModel from "../models/blacklistToke.model.js";
import userService from "../services/user.service.js";
import { validationResult } from "express-validator";

export default {
  registerUser: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { fullname, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email });
    if(isUserExist) {
    res.status(400).json({ message: "User already exists" }); 
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstName: fullname.firstName,
      lastName: fullname.lastName,
      email,
      password: hashPassword,
    });
    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
  },
  loginUser: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = user.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, user });
  },
  getUserProfile: async (req, res, next) => {
    res.status(200).json(req.user);
  },
  logoutUser: async (req, res, next) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistModel.create({token});
    res.status(200).json({ message: "Logged out successfully" });
  },
};
