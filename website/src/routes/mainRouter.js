const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");
const multer = require("multer");
const path = require('path');

const db = require("../database/models");

/*home*/
router.get("/", mainController.home);
/*test*/
router.get("/test", (req, res) => {
    db.CartProducts.findAll({
        where: {
            id_user: 3
        }
    }).then(cart => res.send(cart));
})


module.exports = router;
