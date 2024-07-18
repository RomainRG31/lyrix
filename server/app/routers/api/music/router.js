const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import music-related actions
const { browse, read, add } = require("../../../controllers/musicActions");

// Route to get a list of musics
router.get("/", browse);

// Route to get a specific music by ID
router.get("/:id", read);

// Route to add a new music
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
