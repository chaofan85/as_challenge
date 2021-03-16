// in-memory database
const database = {
  channels: [
    { id: "c1", name: "channel 1" },
    { id: "c2", name: "channel 2" },
    { id: "c3", name: "channel 3" },
    { id: "c4", name: "channel 4" },
    { id: "c5", name: "channel 5" },
  ],
  messages: {
    c1: [],
    c2: [],
    c3: [],
    c4: [],
    c5: [],
  },
};

module.exports = database;
