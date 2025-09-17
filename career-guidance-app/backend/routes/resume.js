const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");

// Save resume
router.post("/save", async (req, res) => {
  try {
    const { userId, resumeType, formData } = req.body;
    const newResume = new Resume({ userId, resumeType, data: formData });
    await newResume.save();
    res.json({ message: "✅ Resume saved successfully!", resume: newResume });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get resumes by user
router.get("/:userId", async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.params.userId });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
