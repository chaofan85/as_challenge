const express = require("express");
const database = require("./database");

const app = express();
app.use(express.json({ extended: false }));

// @route   GET /channels
// @desc    Get all channels
// @access  Public
app.get("/channels", async (req, res) => {
  const channels = database.channels;

  res.json(channels);
});

// @route   GET /messages/:channel
// @desc    Get all messages from the same channel
// @access  Public
app.get("/messages/:channelId", (req, res) => {
  const channelId = req.params.channelId;
  const messages = database.messages[channelId];

  if (messages === undefined) {
    return res.status(404).send("Can't find this channel.");
  }

  res.json(messages);
});

// @route   POST /:channel
// @desc    Create a message in the channel
// @access  Public
app.post("/:channelId", (req, res) => {
  const channelId = req.params.channelId;
  const { messageBody } = req.body;
  const message = {
    messageBody,
    createdAt: new Date(),
  };

  database["messages"][channelId].push(message);
  res.json(database["messages"][channelId]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
