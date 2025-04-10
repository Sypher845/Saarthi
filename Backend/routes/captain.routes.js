import express from "express";
const router = express.Router();
import { body } from "express-validator";
import captainController from "../controllers/captain.controller.js";

router.post("/register",    
  [
    body("fullname.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 characters"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate number must be atleast 3 characters"),
    body("vehicle.capacity")
      .isInt({min: 1})
      .withMessage("Capacity must be atleast 1"),
    body("vehicle.vehicleType")
      .isIn(["motorcycle", "car", "auto"])
      .withMessage("Vehicle type must be either motorcycle, car or auto"),
  ],
  captainController.registerCaptain
);

const captainRoutes = router;
export default captainRoutes;