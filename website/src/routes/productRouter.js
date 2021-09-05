const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");
const path = require('path');
const productController = require('../controllers/productsController');
let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest}); 
const validationProduct = require ('../middlewares/productValidationMiddleware');

/*product list*/
router.get("/", productController.index)
/*product creation*/
router.get("/crear", productsController.creation);
/*product edition*/
router.get("/:id/editar", productsController.edition);
/*detail*/
router.get("/:id", productsController.detail);
/*new product send*/
router.post("/",[upload.single("productImages"), validationProduct], productController.save)             
/*edit product send*/
router.put("/:id", upload.single("productImages"), productController.update)
/*delete product*/
router.delete("/:id", productController.delete)

module.exports = router;  