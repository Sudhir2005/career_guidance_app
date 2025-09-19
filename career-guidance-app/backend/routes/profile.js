const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Ensure the path is correct

// Update profile
router.post("/update", async (req, res) => {
  try {
    const { userId, name, email, career, dob, bio, imageData } = req.body;

    if (!userId) return res.status(400).json({ error: "userId is required" });

    const updateFields = {};

    if (name) updateFields.name = name;
    if (email) updateFields.email = email;
    if (career) updateFields.career = career;
    if (dob) updateFields.dob = dob;
    if (bio) updateFields.bio = bio;
    if (imageData) updateFields.imageUrl = imageData; // store as imageUrl or imageData

    const profile = await User.findByIdAndUpdate(userId, updateFields, {
      new: true,
    });

    if (!profile) return res.status(404).json({ error: "User not found" });

    res.json(profile);
  } catch (err) {
    console.error("Profile Update Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
