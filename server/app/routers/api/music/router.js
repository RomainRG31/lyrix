const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  update,
  remove,
} = require("../../../controllers/musicActions");

router.get("/", browse);
router.get("/:id", read);
router.post("/", add);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
