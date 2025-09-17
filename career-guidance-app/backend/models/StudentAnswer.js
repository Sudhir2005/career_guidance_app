const mongoose = require("mongoose");

const studentAnswerSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      answer: { type: String }
    }
  ],
  scores: { type: Map, of: Number },
  recommendations: { type: Array },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("StudentAnswer", studentAnswerSchema);
