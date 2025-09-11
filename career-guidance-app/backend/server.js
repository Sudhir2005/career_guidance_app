// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate-resume", async (req, res) => {
  try {
    const { resumeType, ...formData } = req.body;

    // Map resumeType to template file
    const templateFile = {
      normal: "normal.docx",
      moderate: "moderate.docx",
      professional: "professional.docx",
    }[resumeType || "normal"];

    const templatePath = path.resolve(__dirname, "templates", templateFile);

    // Load the Word template
    const content = fs.readFileSync(templatePath, "binary");
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    // Set the data to replace placeholders
    doc.render(formData);

    const buffer = doc.getZip().generate({ type: "nodebuffer" });

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${resumeType || "resume"}.docx`
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    res.send(buffer);
  } catch (error) {
    console.error("❌ Error generating resume:", error);
    res.status(500).send("Error generating resume");
  }
});

app.listen(5000, () =>
  console.log("✅ Backend running on http://localhost:5000")
);
