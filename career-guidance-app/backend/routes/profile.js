const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth"); // if using auth
const Profile = require("../models/Profile");

// @route   GET /api/profile/me
// @desc    Get current user's profile
// @access  Private
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
