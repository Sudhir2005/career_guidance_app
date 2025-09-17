const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// Save/Update profile
router.post("/save", async (req, res) => {
  try {
    const { userId, educationLevel, skills, interests } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { userId },
      { educationLevel, skills, interests },
      { new: true, upsert: true }
    );
    res.json({ message: "✅ Profile saved/updated!", profile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get profile
router.get("/:userId", async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
