// const express = require('express');
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send('Hello~ world~');

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenMW = (req, res, next) => {
    console.log("between");
    next();
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(betweenMW);
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;