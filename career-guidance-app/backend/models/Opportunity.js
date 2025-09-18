const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  type: { type: String, enum: ["Internship", "Research", "Fellowship", "Bootcamp"], default: "Internship" },
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Opportunity", opportunitySchema);
