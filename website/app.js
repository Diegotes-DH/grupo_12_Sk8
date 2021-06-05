// para correr el server, usar el comando npm test
const express = require("express");
const path = require("path");
const app = express();

app.listen(3030, ()=>console.log("server start in http://localhost:3030"));

app.use(express.static(path.resolve(__dirname, "./public")));
/*home*/
app.get("/",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "index.html")));

/*register*/
app.get("/registro",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "register.html")));

/*login*/
app.get("/ingresa",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "login.html")));

/*product detail*/
app.get("/producto",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "productDetail.html")));

/*carrito*/
app.get("/carrito",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "cart.html")));
