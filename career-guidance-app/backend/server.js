// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Document, Packer, Paragraph, TextRun } = require("docx");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate-resume", async (req, res) => {
  try {
    const { name, email, phone, address, education, experience, skills } =
      req.body;

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun({ text: name, bold: true, size: 32 })],
            }),
            new Paragraph(`${email} | ${phone}`),
            new Paragraph(address),
            new Paragraph(" "),
            new Paragraph({ text: "Education", bold: true }),
            new Paragraph(education),
            new Paragraph({ text: "Experience", bold: true }),
            new Paragraph(experience),
            new Paragraph({ text: "Skills", bold: true }),
            new Paragraph(skills),
          ],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);
    res.setHeader("Content-Disposition", "attachment; filename=resume.docx");
    res.send(buffer);
  } catch (error) {
    console.error("Error generating resume:", error);
    res.status(500).send("Error generating resume");
  }
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
