const { 
    getProducts, 
    createProduct, 
    deleteProduct 
} = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
