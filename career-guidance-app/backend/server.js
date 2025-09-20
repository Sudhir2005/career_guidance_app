require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/psychometric", require("./routes/psychometric"));
app.use("/api/opportunities", require("./routes/opportunity"));
app.use("/api/resume", require("./routes/resume"));

// ✅ Default route → redirect to login
app.get("/", (req, res) => {
  res.redirect("/login"); // frontend login page
});



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
