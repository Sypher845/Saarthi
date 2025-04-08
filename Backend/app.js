import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
const app= express();
import cookieParser from "cookie-parser";
import connectToDb from "./db/db.js";
connectToDb();

import router from "./routes/user.routes.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Hello Baby");
});


app.use("/users",router);

export default app;