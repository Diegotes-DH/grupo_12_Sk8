const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
//const multer = require("multer");
const path = require('path');


/*login*/
router.get("/ingresa",usersController.login); 
/*register*/
router.get("/registro", usersController.register);



module.exports = router;