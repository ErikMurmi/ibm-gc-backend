const { getProducts, createProduct } = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;
