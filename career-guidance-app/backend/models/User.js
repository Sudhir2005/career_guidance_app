const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  career: String,
  otherCareer: String,
  dob: Date,
  bio: String,
  profileImage: String,
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
