const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeType: { type: String, enum: ["normal", "moderate", "professional"], default: "normal" },
  data: { type: Object, required: true }, // formData
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);
