const express = require("express");

const router = express.Router();

const itemsRouter = require("./items/router");
const musicRouter = require("./music/router");

router.use("/items", itemsRouter);
router.use("/music-form", musicRouter);

module.exports = router;
