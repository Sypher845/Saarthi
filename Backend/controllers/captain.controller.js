import blacklistModel from "../models/blacklistToke.model.js";
import captainModel from "../models/captain.model.js";
import captainService from "../services/captain.service.js";
import { validationResult } from "express-validator";

export default {
  registerCaptain: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;

    const isCaptainExist = await captainModel.findOne({ email });
    
    if (isCaptainExist) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const hashPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
      firstName: fullname.firstName,
      lastName: fullname.lastName,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    if (!captain) {
      return res.status(400).json({ message: "Failed to register captain" });
    }
    const token = captain.generateAuthToken();
    res.status(201).json({token , captain});
  },
  loginCaptain: async (req,res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    if(!captain) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await captain.comparePassword(password);
    if(!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, captain });
  },
  getCaptainProfile: async (req, res, next) => {
    const captain = req.captain;
    if (!captain) {
      return res.status(400).json({ message: "Captain not found" });
    }
    res.status(200).json({ captain });
  },
  logoutCaptain: async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Captain not logged in" });
    }
    await blacklistModel.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "Captain logged out successfully" });
  }
};
