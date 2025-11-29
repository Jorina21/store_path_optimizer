//changing home page 
const express = require("express");
const path = require("path"); 
const app = express();


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,frontend/home.html));
})

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/login.html")); 
})

