const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  channelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
    required: true,
  },
  textBody: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = Message = mongoose.model("Message", MessageSchema);
