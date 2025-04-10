import userModel from "../models/user.model.js";
import blacklistModel from "../models/blacklistToke.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import captainModel from "../models/captain.model.js";

export default {
    authUser:async (req,res,next)=>{
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }

        const isBlacklisted = await blacklistModel.findOne({token:token});
        if(isBlacklisted){

        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await userModel.findById(decoded._id);

            req.user = user;
            return next();
        } catch (error) {
            return res.status(401).json({message:"Unauthorized"});
        }
    },

    authCaptain:async (req,res,next)=>{
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }

        const isBlacklisted = await blacklistModel.findOne({token:token});
        if(isBlacklisted){
            return res.status(401).json({message:"Unauthorized"});
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const captain = await captainModel.findById(decoded._id);

            req.captain = captain;
            return next();
        } catch (error) {
            return res.status(401).json({message:"Unauthorized"});
        }
    }
}