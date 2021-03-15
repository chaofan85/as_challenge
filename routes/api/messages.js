const express = require("express");
const router = express.Router();
const database = require("../../database");

// @route   GET api/channels
// @desc    Get all channels
// @access  Public

router.get("/messages/:channelId", async (req, res) => {
  const channelId = req.params.channelId;

  const messages = database.messages[channelId];
  if (messages === undefined) {
    return res.status(404).send("Can't find messages from this channel");
  }
  res.json(messages);
});

module.exports = router;
