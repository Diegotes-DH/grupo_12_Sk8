const express = require('express');
const router = express.Router();

// controller
const usersController = require("../controllers/usersController");

//middlewares
const validations = require("../middlewares/validationsMiddleware");
const upload = require('../middlewares/multerMiddleware');
const guestMiddleware = require("../middlewares/guestMiddleware");
const noGuestMiddleware = require("../middlewares/noGuestMiddleware");

//ver formulario de registro
router.get("/registro", guestMiddleware, usersController.register);

//ver formulario de login
router.get("/ingresa", guestMiddleware ,usersController.login); 

//ver perfil de usuario 
router.get("/perfil", noGuestMiddleware, usersController.profile)

//cerrar la sesión
router.get("/salir", usersController.logout)

//procesar el formulario de registro 
router.post("/registro", [upload.single("avatar"),validations], usersController.save);
 
//procesar el formulario de loggin  
router.post("/ingresa", usersController.loginProcess); 

module.exports = router;