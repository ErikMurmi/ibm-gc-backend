const { getPosts, createPost } = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
