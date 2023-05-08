const { getSuggestions } = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getSuggestions);

module.exports = router;
