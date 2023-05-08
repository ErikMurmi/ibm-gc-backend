const { getPosts } = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getPosts);

module.exports = router;
