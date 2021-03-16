const express = require("express");
const router = express.Router();
const database = require("../../database");

// @route   GET api/channels
// @desc    Get all channels
// @access  Public

router.get("/:channelId", async (req, res) => {
  const channelId = req.params.channelId;

  const messages = database.messages[channelId];
  if (messages === undefined) {
    return res.status(404).send("Can't find messages from this channel");
  }
  res.json(messages);
});

router.post("/", async (req, res) => {
  const { channelId, messageBody } = req.body;

  const messageObj = {
    messageBody,
    createdAt: Date.now(),
  };

  database[channelId].push(messageObj);

  res.json(database.messages);
});

module.exports = router;
