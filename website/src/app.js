// para correr el server, usar el comando npm test
const express = require("express");
const path = require("path");
const method = require("method-override");
const app = express();

/* Servidor */
app.set("port", process.env.PORT || 3030);
app.listen(app.get("port"),()=>console.log("Server start http://localhost:"+app.get("port")))

/* Acceso Publico */
app.use(express.static(path.resolve(__dirname, "../public")));

/* View Engine */
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// /* Data Configuration */
app.use(express.urlencoded({extended:false})) // Not fund req.body
app.use(method("_method")) // ?_method=PUT

/* Rutas */

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
