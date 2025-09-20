console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY); // Should print your key

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateProjectDescription(projectTitle, projectDescription = "") {
  try {
    const model = genAI.getGenerativeModel({ model: "models/text-bison-001" });

    const prompt = `
    Write a concise, ATS-optimized 2-line professional description for this project:
    Project Title: "${projectTitle}"
    Project Description: "${projectDescription}"
    Focus on impact, skills used, and results in a recruiter-friendly tone.
    `;

    const result = await model.generateContent(prompt);
    return result.response?.text || "A project showcasing strong technical and problem-solving skills.";
  } catch (err) {
    console.error("Gemini API Error:", err.message || err);
    return "A project showcasing strong technical and problem-solving skills.";
  }
}

module.exports = { generateProjectDescription };
