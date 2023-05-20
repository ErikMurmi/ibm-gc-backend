const {
  getPosts,
  createPost,
  getSalePost,
  updateSalePost,
  deleteSalePost,
} = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getPosts);
router.get("/:postId", getSalePost);
router.post("/", createPost);
router.delete("/:postId", deleteSalePost);
router.put("/:postId", updateSalePost);

module.exports = router;
