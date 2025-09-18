require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/resume", require("./routes/resume"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/psychometric", require("./routes/psychometric")); // ✅ Psychometric Test
app.use("/api/opportunities", require("./routes/opportunity")); // ✅ Opportunities

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Career Guidance API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
