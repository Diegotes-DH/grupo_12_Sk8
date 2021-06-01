// para correr el server, usar el comando npm test
const express = require("express");
const path = require("path");
const app = express();

app.listen(3030, ()=>console.log("server start in http://localhost:3030"));

app.use(express.static(path.resolve(__dirname, "./public")));
/*home*/
app.get("/",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "index.html")));

/*register*/
app.get("/register",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "register.html")));

/*login*/
app.get("/login",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "login.html")));

/*product detail*/
app.get("/product",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "productDetail.html")));
