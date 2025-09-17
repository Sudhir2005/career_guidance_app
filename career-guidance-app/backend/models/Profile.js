const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  educationLevel: String,
  skills: [String],
  interests: [String],
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema);
