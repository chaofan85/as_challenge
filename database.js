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
    c1: ["Hello"],
    c2: ["How are you"],
    c3: ["Good to see you"],
    c4: ["Have a good day"],
    c5: ["Bye"],
  },
};

module.exports = database;
