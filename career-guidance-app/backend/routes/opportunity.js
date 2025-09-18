const express = require("express");
const router = express.Router();
const { getOpportunities, createOpportunity } = require("../controllers/opportunityController");
const OpportunityApplication = require("../models/OpportunityApplication");
const auth = require("../middleware/auth");

// GET all opportunities
router.get("/", getOpportunities);

// POST new opportunity
router.post("/", createOpportunity);

// ✅ APPLY for opportunity
router.post("/apply", auth, async (req, res) => {
  try {
    const { title, type } = req.body;

    if (!title || !type) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    const newApplication = new OpportunityApplication({
      userId: req.user.id, // from auth middleware
      opportunityTitle: title,
      opportunityType: type,
    });

    await newApplication.save();
    res.status(201).json({ msg: "Application submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
