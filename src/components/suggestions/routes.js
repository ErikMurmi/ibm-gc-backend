const { getSuggestions, createSuggestion } = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getSuggestions);
router.post("/", createSuggestion);

module.exports = router;
