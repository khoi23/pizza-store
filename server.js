// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRouter from "./routes/productRoute.js";
// require("color");

dotenv.config();

// connect with mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connect to db");
    })
    .catch((err) => {
        console.log(err.message);
    });

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// routes
app.use("/api/products", productRouter);

// Create Port
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
    console.log(`Server at working on the port: http://localhost:${PORT}`);
});
