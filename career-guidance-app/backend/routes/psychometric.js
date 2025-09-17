const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const StudentAnswer = require("../models/StudentAnswer");
const auth = require("../middleware/auth");

// Career recommendations mapping
const careerRecommendations = {
  Engineering: [
    { courseName: "Computer Science", degree: "B.Tech", college: "MIT", careerField: "Engineering" },
    { courseName: "Mechanical Engineering", degree: "B.Tech", college: "Stanford", careerField: "Engineering" }
  ],
  Design: [
    { courseName: "Graphic Design", degree: "B.Des", college: "NID", careerField: "Design" },
    { courseName: "UI/UX Design", degree: "B.Des", college: "RISD", careerField: "Design" }
  ],
  Management: [
    { courseName: "Business Administration", degree: "BBA", college: "Harvard", careerField: "Management" },
    { courseName: "Project Management", degree: "BBA", college: "IIM", careerField: "Management" }
  ]
};

// GET all questions
router.get("/questions", auth, async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST answers and calculate recommendations
router.post("/submit", auth, async (req, res) => {
  try {
    const studentId = req.user.id;
    const { answers } = req.body;

    let scores = {};
    for (const ans of answers) {
      const question = await Question.findById(ans.questionId);
      if (!question) continue;

      if (!scores[question.careerField]) scores[question.careerField] = 0;
      if (ans.answer === "Yes") scores[question.careerField] += question.weight;
    }

    const topFields = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(entry => entry[0]);

    let recommendations = [];
    topFields.forEach(field => {
      recommendations.push(...careerRecommendations[field] || []);
    });

    const studentAnswer = new StudentAnswer({ studentId, answers, scores, recommendations });
    await studentAnswer.save();

    res.json({ scores, recommendations });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
