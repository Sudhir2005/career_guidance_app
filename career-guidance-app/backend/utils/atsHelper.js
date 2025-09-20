// utils/atsHelper.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Function to get ATS Score from Gemini
async function getATSScore(resumeText) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    Evaluate this resume content for ATS-friendliness (0-100).
    Consider keywords, structure, clarity, and professionalism.
    Resume Content: ${resumeText}
    Give just a number.
  `;

  const result = await model.generateContent(prompt);
  return parseInt(result.response.text()) || 75; // fallback
}

module.exports = { getATSScore };
