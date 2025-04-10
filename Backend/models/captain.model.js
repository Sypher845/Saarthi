import mongoose from "mongoose";
import bcrytp from "bcrypt";
import jwt from "jsonwebtoken";

const captianSchema = new mongoose.Schema({
  fullname: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "First name must be atleast 3 characters long"],
    },
    lastName: {
      type: String,
      minlength: [3, "Last name must be atleast 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [5, "Email must be atleast 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be atleast 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate number must be atleast 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be atleast 1"],
    },
    vehicleType: {
      type: String,
      enum: ["motorcycle", "car", "auto"],
      required: true,
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captianSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captianSchema.methods.comparePassword = async function (password) {
  return await bcrytp.compare(password, this.password);
};

captianSchema.statics.hashPassword = async function (password) {
  return await bcrytp.hash(password, 10);
}

const captainModel = mongoose.model("captain", captianSchema);
export default captainModel;