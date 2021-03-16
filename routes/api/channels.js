const express = require("express");
const router = express.Router();
const database = require("../../database");

// @route   GET api/channels
// @desc    Get all channels
// @access  Public

router.get("/", async (req, res) => {
  try {
    const channels = database.channels;

    res.json(channels);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
