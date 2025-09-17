const mongoose = require("mongoose");
const Question = require("../models/Question");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const questions = [
  { question: "Do you enjoy problem-solving?", options: ["Yes", "No"], careerField: "Engineering", weight: 3 },
  { question: "Do you like creating visual content?", options: ["Yes", "No"], careerField: "Design", weight: 3 },
  { question: "Do you enjoy organizing teams or projects?", options: ["Yes", "No"], careerField: "Management", weight: 3 },
  { question: "Are you comfortable with math and logic?", options: ["Yes", "No"], careerField: "Engineering", weight: 2 },
  { question: "Do you like thinking creatively?", options: ["Yes", "No"], careerField: "Design", weight: 2 },
];

Question.insertMany(questions)
  .then(() => {
    console.log("Questions inserted!");
    mongoose.disconnect();
  })
  .catch(err => console.log(err));
