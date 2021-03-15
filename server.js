const express = require("express");
// const connectDB = require("./config/db");
// const path = require("path");

const app = express();

// connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/channels", require("./routes/api/channels"));
app.use("/api/messages", require("./routes/api/messages"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
