const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`running on : localhost:${PORT}`);
}

function handleHome(req, res){
    res.send('Hello~');
}

function handleProfile(req, res){
    res.send("You are on my profile");
}

app.listen(PORT, handleListening);
app.get("/", handleHome);
app.get("/profile", handleProfile);