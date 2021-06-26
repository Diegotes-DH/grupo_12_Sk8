const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const path = require('path');



/*register*/
router.get("/registro", usersController.register);
/*login*/
router.get("/ingresa",usersController.login);


module.exports = router;