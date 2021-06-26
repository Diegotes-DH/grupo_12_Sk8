const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");
const path = require('path');



/*product creation*/
router.get("/crear", productsController.creation);
/*product edition*/
router.get("/editar", productsController.edition);
/*detail*/
router.get("/detalle", productsController.detail);
module.exports = router;