const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");

// Optional AI/ATS helpers (wrap in try/catch to prevent crash)
const { generateProjectDescription } = require("../services/geminiService");
const { getATSScore } = require("../utils/atsHelper");

router.post("/generate", async (req, res) => {
  try {
    let { name, email, phone, education, experience, skills, projects, resumeType } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Normalize input arrays
    education = Array.isArray(education) ? education : education ? [education] : [];
    experience = Array.isArray(experience) ? experience : experience ? [experience] : [];
    skills = Array.isArray(skills) ? skills : skills ? skills.split(",").map(s => s.trim()) : [];
    projects = Array.isArray(projects) ? projects : projects ? [projects] : [];
    resumeType = resumeType || "Professional";

    // ATS Score calculation
    let atsScore = "N/A";
    try {
      const resumeText = `Name: ${name}, Email: ${email}, Phone: ${phone}, Education: ${JSON.stringify(
        education
      )}, Experience: ${JSON.stringify(experience)}, Skills: ${skills.join(", ")}, Projects: ${JSON.stringify(
        projects
      )}`;
      atsScore = await getATSScore(resumeText);
    } catch (e) {
      console.warn("ATS scoring failed, skipping:", e.message);
    }

    // PDF document
    const doc = new PDFDocument({ margin: 50 });
    const filename = `${name.replace(/\s+/g, "_")}_Resume.pdf`;

    res.setHeader("Content-disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-type", "application/pdf");
    doc.pipe(res);

    // ===== Register UTF-8 fonts =====
    doc.registerFont("Roboto", "./fonts/Roboto-Regular.ttf");
    doc.registerFont("Roboto-Bold", "./fonts/Roboto-Bold.ttf");

    // ===== Header =====
    doc.font("Roboto-Bold").fontSize(26).fillColor("#2E3A87").text(name, { align: "center" });
    doc.moveDown(0.3);
    doc.font("Roboto").fontSize(12).fillColor("#333").text(`Email: ${email} | Phone: ${phone}`, { align: "center" });
    doc.moveDown(0.5);
    doc.font("Roboto").fontSize(12).fillColor("#0D7A46").text(`ATS Score: ${atsScore}`, { align: "center" });
    doc.moveDown(1);
    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

    // ===== Education =====
    doc.moveDown(1);
    doc.font("Roboto-Bold").fontSize(16).fillColor("#2E3A87").text("Education", { underline: true });
    if (education.length) {
      education.forEach(edu => {
        doc.font("Roboto").fontSize(12).fillColor("black")
          .text(`${edu.degree || edu} - ${edu.institution || ""} (${edu.year || ""})`);
      });
    } else {
      doc.font("Roboto").fontSize(12).fillColor("black").text("N/A");
    }

    // ===== Experience =====
    doc.moveDown(1);
    doc.font("Roboto-Bold").fontSize(16).fillColor("#2E3A87").text("Experience", { underline: true });
    if (experience.length) {
      experience.forEach(exp => {
        doc.font("Roboto-Bold").fontSize(12).fillColor("black")
          .text(`${exp.role || exp} - ${exp.company || ""} (${exp.duration || ""})`);
        doc.font("Roboto").fontSize(11).fillColor("#444")
          .text(exp.details || "", { indent: 20, lineGap: 4 });
        doc.moveDown(0.5);
      });
    } else {
      doc.font("Roboto").fontSize(12).fillColor("black").text("N/A");
    }

    // ===== Projects =====
    doc.moveDown(1);
    doc.font("Roboto-Bold").fontSize(16).fillColor("#2E3A87").text("Projects", { underline: true });
    if (projects.length) {
      for (const project of projects) {
        const title = project.title || "Untitled Project";
        doc.font("Roboto-Bold").fontSize(12).fillColor("black").text(title);

        // Safe AI description
        let aiSummary = "Project summary unavailable.";
        try {
          if (generateProjectDescription) {
            aiSummary = await generateProjectDescription(title, project.description || "");
          }
        } catch (e) {
          console.warn(`Gemini AI failed for ${title}:`, e.message);
        }

        doc.font("Roboto").fontSize(11).fillColor("#444").text(aiSummary, { indent: 20, lineGap: 4 });
        doc.moveDown(0.5);
      }
    } else {
      doc.font("Roboto").fontSize(12).fillColor("black").text("N/A");
    }

    // ===== Skills =====
    doc.moveDown(1);
    doc.font("Roboto-Bold").fontSize(16).fillColor("#2E3A87").text("Skills", { underline: true });
    doc.font("Roboto").fontSize(12).fillColor("black").text(skills.length ? skills.join(", ") : "N/A");

    // ===== Footer =====
    doc.moveDown(1.5);
    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown(1);
    doc.font("Roboto").fontSize(10).fillColor("#555")
      .text(`Generated with Gryffindor Career Guidance - Style: ${resumeType}`, { align: "center", opacity: 0.7 });

    doc.end();
  } catch (err) {
    console.error("Resume generation error:", err);
    res.status(500).json({ error: "Failed to generate resume" });
  }
});

module.exports = router;
