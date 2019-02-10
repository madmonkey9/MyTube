// const express = require('express');
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`running on : localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hello~ world~');

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenMW = (req, res, next) => {
    console.log("between");
    next();
}


//using individual
// app.get("/", betweenMW, handleHome);

//using globally
app.use(betweenMW);

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);