const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const client = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

async function listModels() {
  try {
    const response = await client.listModels(); // correct method
    console.log("Available models:", response);
  } catch (err) {
    console.error("Error listing models:", err);
  }
}

listModels();
