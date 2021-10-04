var express = require('express');
var router = express.Router();

const productsController = require('../../controllers/api/productsController');

router.get('/', productsController.list);
router.get('/:id', productsController.show)
router.get('/colors', productsController.colors)

module.exports = router;
