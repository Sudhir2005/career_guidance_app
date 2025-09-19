// routes/resume.js
const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");

// ✅ Generate Resume Route
router.post("/generate", async (req, res) => {
  try {
    const { name, email, phone, education, experience, skills, resumeType } = req.body;

    // Create a new PDF document
    const doc = new PDFDocument();
    let filename = `${name.replace(/\s+/g, "_")}_Resume.pdf`;

    // Set headers for file download
    res.setHeader("Content-disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-type", "application/pdf");

    // Pipe the PDF into the response
    doc.pipe(res);

    // =============== HEADER ===============
    doc.fontSize(22).text(name, { align: "center" });
    doc.moveDown(0.5);
    doc.fontSize(12).text(`Email: ${email}`, { align: "center" });
    doc.text(`Phone: ${phone}`, { align: "center" });
    doc.moveDown(1);

    // =============== EDUCATION ===============
    doc.fontSize(16).text("Education", { underline: true });
    doc.fontSize(12).text(education || "N/A");
    doc.moveDown(1);

    // =============== EXPERIENCE ===============
    doc.fontSize(16).text("Experience", { underline: true });
    doc.fontSize(12).text(experience || "N/A");
    doc.moveDown(1);

    // =============== SKILLS ===============
    doc.fontSize(16).text("Skills", { underline: true });
    doc.fontSize(12).text(skills || "N/A");
    doc.moveDown(1);

    // =============== FOOTER ===============
    doc.moveDown(2);
    doc.fontSize(10).text(
      `Generated with Gryffindor Career Guidance - Style: ${resumeType}`,
      { align: "center", opacity: 0.7 }
    );

    // Finalize PDF and end stream
    doc.end();
  } catch (err) {
    console.error("Resume generation error:", err);
    res.status(500).json({ error: "Failed to generate resume" });
  }
});

module.exports = router;
