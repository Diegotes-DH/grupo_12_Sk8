const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");
/*home*/
router.get("/", mainController.home);
/*register*/
router.get("/registro", mainController.register);
/*login*/
router.get("/ingresa",mainController.login);
/*detail*/
router.get("/producto", mainController.detail);
/*cart*/
router.get("/carrito", mainController.cart);
/*product creation*/
router.get("/producto/crear", mainController.productCreation);
/*product edition*/
router.get("/producto/editar", mainController.productEdition)






module.exports = router;
