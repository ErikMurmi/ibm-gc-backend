const { getEndevours } = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getEndevours);

module.exports = router;
