const mongoose = require("mongoose");

const OpportunityApplicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // assuming you have a User model
      required: true,
    },
    opportunityTitle: { type: String, required: true },
    opportunityType: { type: String, required: true },
    status: { type: String, default: "Applied" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OpportunityApplication", OpportunityApplicationSchema);
