import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
const app= express();
import cookieParser from "cookie-parser";
import connectToDb from "./db/db.js";
connectToDb();

import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Hello Baby");
});


app.use("/users",userRoutes);
app.use("/captains",captainRoutes);

export default app;