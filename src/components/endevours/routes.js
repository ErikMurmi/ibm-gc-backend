const {
  getEndevours,
  createEndevour,
  deleteEndevour,
  updateEndevour,
} = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getEndevours);
router.post("/", createEndevour);
router.delete("/:endevourId", deleteEndevour);
router.put("/:endevourId", updateEndevour);
module.exports = router;
