const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/", cartController.index);
router.post("/agregar", cartController.add);
router.delete("/borrar", cartController.remove);

module.exports = router;