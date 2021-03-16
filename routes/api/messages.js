const express = require("express");
const router = express.Router();
const database = require("../../database");

// @route   GET api/channels
// @desc    Get all channels
// @access  Public

router.get("/:channelId", (req, res) => {
  const channelId = req.params.channelId;

  const messages = database.messages[channelId];
  if (messages === undefined) {
    return res.status(404).send("Can't find messages from this channel");
  }
  res.json(messages);
});

router.post("/", (req, res) => {
  const { channelId, messageBody } = req.body;

  database["messages"][channelId].push(messageBody);

  res.json(database["messages"][channelId]);
});

module.exports = router;
