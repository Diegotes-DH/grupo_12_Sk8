// para correr el server, usar el comando npm test
const express = require("express");
const path = require("path");
const method = require("method-override");
const session = require("express-session");
const cookie = require("cookie-parser");
const bcrypt = require("bcryptjs");
const app = express();

/* Middlewares de aplicación */
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")

/* Servidor */
app.set("port", process.env.PORT || 3030);
app.listen(app.get("port"),()=>console.log("Server start http://localhost:"+app.get("port")))

/* Acceso Publico */
app.use(express.static(path.resolve(__dirname, "../public")));

/* View Engine */ 
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

/* Data Configuration */
app.use(express.urlencoded({extended:false})) // Not fund req.body
app.use(method("_method")) // ?_method=PUT
app.use(session({saveUnitialized: false, resave: false, secret:"mensaje secreto"}))
app.use(cookie())
app.use(userLoggedMiddleware) //para que en el navbar solo estén opciones de usuario logeado


/* Rutas */
const main = require("./routes/mainRouter")
app.use(main);
const products = require("./routes/productRouter");
app.use("/producto", products);
const users = require("./routes/usersRouter");
app.use("/usuario", users); 
const productsApi = require('./routes/api/productsRouter');
app.use('/api/products', productsApi);
const usersApi = require('./routes/api/usersRouter');
app.use('/api/users', usersApi);
/* Error 404 */
app.use((req, res, next) => {
    res.status(404).render("error");
})







