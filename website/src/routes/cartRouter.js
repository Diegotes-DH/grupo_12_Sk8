const express = require("express");
const router = express.Router();
const noGuestMiddleware = require("../middlewares/noGuestMiddleware");

const cartController = require("../controllers/cartController");

router.get("/",noGuestMiddleware, cartController.index);
router.post("/agregar", cartController.add);
router.delete("/borrar", cartController.remove);

module.exports = router;