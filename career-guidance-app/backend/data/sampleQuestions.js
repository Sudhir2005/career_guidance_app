const mongoose = require("mongoose");
const Question = require("../models/Question");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

const questions = [
  // Engineering
  {
    question: "Do you enjoy solving logical and mathematical problems?",
    options: ["Yes", "No"],
    careerField: "Engineering",
    weight: 3
  },
  {
    question: "Are you interested in coding or programming?",
    options: ["Yes", "No"],
    careerField: "Engineering",
    weight: 3
  },
  {
    question: "Do you enjoy designing and building things?",
    options: ["Yes", "No"],
    careerField: "Engineering",
    weight: 2
  },

  // Design
  {
    question: "Do you enjoy drawing, painting, or creative arts?",
    options: ["Yes", "No"],
    careerField: "Design",
    weight: 3
  },
  {
    question: "Are you interested in digital design, UI/UX, or graphics?",
    options: ["Yes", "No"],
    careerField: "Design",
    weight: 3
  },
  {
    question: "Do you have a strong sense of aesthetics and colors?",
    options: ["Yes", "No"],
    careerField: "Design",
    weight: 2
  },

  // Management
  {
    question: "Do you enjoy planning and organizing tasks?",
    options: ["Yes", "No"],
    careerField: "Management",
    weight: 3
  },
  {
    question: "Are you good at leading or managing teams?",
    options: ["Yes", "No"],
    careerField: "Management",
    weight: 3
  },
  {
    question: "Do you have an interest in business, finance, or marketing?",
    options: ["Yes", "No"],
    careerField: "Management",
    weight: 2
  },

  // Science
  {
    question: "Do you enjoy conducting experiments and research?",
    options: ["Yes", "No"],
    careerField: "Science",
    weight: 3
  },
  {
    question: "Are you curious about natural phenomena or scientific principles?",
    options: ["Yes", "No"],
    careerField: "Science",
    weight: 3
  },
  {
    question: "Do you enjoy analyzing data and drawing conclusions?",
    options: ["Yes", "No"],
    careerField: "Science",
    weight: 2
  },

  // Humanities & Social
  {
    question: "Are you interested in history, politics, or society?",
    options: ["Yes", "No"],
    careerField: "Humanities",
    weight: 3
  },
  {
    question: "Do you enjoy reading, writing, or debating?",
    options: ["Yes", "No"],
    careerField: "Humanities",
    weight: 2
  },
  {
    question: "Do you like helping and guiding others in social work?",
    options: ["Yes", "No"],
    careerField: "Humanities",
    weight: 3
  },

  // Entrepreneurship & Innovation
  {
    question: "Do you enjoy creating new ideas or starting projects?",
    options: ["Yes", "No"],
    careerField: "Management",
    weight: 2
  },
  {
    question: "Are you comfortable taking calculated risks?",
    options: ["Yes", "No"],
    careerField: "Management",
    weight: 2
  },
];


const seedDB = async () => {
  await Question.deleteMany({});
  await Question.insertMany(questions);
  console.log("✅ Sample questions inserted");
  mongoose.connection.close();
};

seedDB();
