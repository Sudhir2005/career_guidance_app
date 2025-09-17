const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true, default: ["Yes", "No"] },
  careerField: { type: String, required: true }, // e.g., "Engineering", "Design", "Management"
  weight: { type: Number, default: 1 }, // Weight for scoring
});

module.exports = mongoose.model("Question", questionSchema);
