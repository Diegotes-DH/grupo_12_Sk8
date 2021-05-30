// para correr el server, usar el comando npm test
const express = require("express");
const path = require("path");
const app = express();

app.listen(3030, ()=>console.log("server start in http://localhost:3030"));

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "index.html")));

app.get("/register",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "register.html")));

app.get("/login",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "login.html")));