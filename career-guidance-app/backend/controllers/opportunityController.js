const Opportunity = require("../models/Opportunity");

// Get all opportunities
exports.getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find().sort({ postedAt: -1 });
    res.json(opportunities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new opportunity
exports.createOpportunity = async (req, res) => {
  try {
    const { title, description, link, type } = req.body;

    const newOpp = new Opportunity({ title, description, link, type });
    await newOpp.save();

    res.status(201).json(newOpp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
