const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
} = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getUsers);
router.get("/:uid", getUser);
router.post("/create", createUser);
router.delete("/:userId", deleteUser);
router.put("/:userId", updateUser);
module.exports = router;
