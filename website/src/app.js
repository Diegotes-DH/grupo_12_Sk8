// para correr el server, usar el comando npm test
const express = require("express");
const path = require("path");
const app = express();

app.listen(3030, ()=>console.log("server start in http://localhost:3030"));
app.use(express.static(path.resolve(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

/*home*/
const main = require("./routes/mainRouter")
app.use(main);

/*register*/
// const register = require("./routes/mainRouter");
// app.use(register);

// /*login*/
// const login = require("./routes/mainRouter");
// app.use(login);

// /*product detail*/
// app.get("/producto",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "productDetail.ejs")));

// /*carrito*/
// app.get("/carrito",(req,res)=> res.sendFile(path.resolve(__dirname, "./views", "cart.ejs")));
