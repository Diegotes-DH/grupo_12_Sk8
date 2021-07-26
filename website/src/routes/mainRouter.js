const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");
const multer = require("multer");
const path = require('path');
/*home*/
router.get("/", mainController.home);
/*cart*/
router.get("/carrito", mainController.cart);


module.exports = router;
