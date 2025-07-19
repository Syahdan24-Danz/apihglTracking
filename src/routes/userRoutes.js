const express = require("express");
const userController = require("../controllers/userControllers");

const router = express.Router();

router.get("/orders/:id", userController.getOrders);
router.get("/orders/images/:id_product", userController.getImages);

module.exports = router;
