var express = require('express');
var router = express.Router();

const usersController = require('../../controllers/api/usersController');

router.get('/', usersController.list);
router.get('/:id', usersController.show)

module.exports = router;
