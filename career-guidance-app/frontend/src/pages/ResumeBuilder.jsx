import { useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaPhotoVideo,
  FaProjectDiagram,
  FaCertificate,
  FaTrophy,
  FaLanguage,
  FaUsers,
  FaEye,
  FaArrowLeft,
  FaArrowRight,
  FaFileDownload,
  FaLock,
  FaStar,
} from "react-icons/fa";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
    certifications: "",
    achievements: "",
    languages: "",
    extracurriculars: "",
    photo: null,
  });

  const [step, setStep] = useState(1);
  const [resumeType, setResumeType] = useState("normal"); // normal | moderate | professional

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhoto = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        photo: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 11));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    if (resumeType === "professional") {
      alert(
        "Professional Resume is available only once for free. Please subscribe for unlimited access."
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, resumeType }),
      });

      if (!response.ok) throw new Error("Failed to generate resume");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${resumeType}-resume.docx`;
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Something went wrong while generating your resume.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100">
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-10 max-w-7xl lg:grid-cols-2">
        {/* ===== LEFT FORM ===== */}
        <div className="p-6 bg-white border border-gray-200 shadow-2xl sm:p-8 rounded-2xl">
          <h2 className="mb-6 text-2xl font-extrabold text-center text-indigo-700 sm:mb-8 sm:text-3xl">
            Build Your Resume
          </h2>

          {/* Step Navigation */}
          <div className="flex justify-start gap-2 mb-6 overflow-x-auto text-xs sm:flex-wrap sm:justify-between sm:mb-8 sm:text-sm scrollbar-hide">
            {[
              "Personal",
              "Summary",
              "Education",
              "Experience",
              "Skills",
              "Projects",
              "Certifications",
              "Achievements",
              "Languages",
              "Activities",
              "Photo",
            ].map((label, i) => (
              <span
                key={i}
                className={`px-3 py-1 whitespace-nowrap rounded-full font-medium transition ${
                  step === i + 1
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Step Sections */}
          <div className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaUser className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Personal Info
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaStar className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Professional Summary
                </h3>
                <textarea
                  name="summary"
                  placeholder="Brief professional summary"
                  value={formData.summary}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaGraduationCap className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Education
                </h3>
                <textarea
                  name="education"
                  placeholder="Degrees, Institutions, Years"
                  value={formData.education}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaBriefcase className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Experience
                </h3>
                <textarea
                  name="experience"
                  placeholder="Job titles, Companies, Duration"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaTools className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Skills
                </h3>
                <textarea
                  name="skills"
                  placeholder="E.g. JavaScript, React, Node.js"
                  value={formData.skills}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 6 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaProjectDiagram className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Projects
                </h3>
                <textarea
                  name="projects"
                  placeholder="Projects, Role, Impact"
                  value={formData.projects}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 7 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaCertificate className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Certifications
                </h3>
                <textarea
                  name="certifications"
                  placeholder="Relevant Certifications"
                  value={formData.certifications}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 8 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaTrophy className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Achievements
                </h3>
                <textarea
                  name="achievements"
                  placeholder="Awards, Recognitions"
                  value={formData.achievements}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 9 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaLanguage className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Languages
                </h3>
                <textarea
                  name="languages"
                  placeholder="English, French, etc."
                  value={formData.languages}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 10 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaUsers className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Extracurriculars
                </h3>
                <textarea
                  name="extracurriculars"
                  placeholder="Clubs, Volunteering, Leadership roles"
                  value={formData.extracurriculars}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50"
                />
              </div>
            )}

            {step === 11 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <FaPhotoVideo className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Upload Photo
                </h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhoto}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Resume Type Selection */}
          <div className="mt-6 sm:mt-8">
            <h3 className="mb-3 text-base font-bold text-gray-800 sm:text-lg">
              Choose Resume Type
            </h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => setResumeType("normal")}
                className={`px-4 py-2 rounded-lg border ${
                  resumeType === "normal"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Normal ✅
              </button>
              <button
                onClick={() => setResumeType("moderate")}
                className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
                  resumeType === "moderate"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaStar /> Moderate
              </button>
              <button
                onClick={() => setResumeType("professional")}
                className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
                  resumeType === "professional"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaLock /> Professional
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col justify-between gap-3 mt-6 sm:flex-row sm:mt-10">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="flex items-center justify-center gap-2 px-4 py-2 text-gray-800 transition bg-gray-200 rounded-lg sm:px-6 hover:bg-gray-300"
              >
                <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back
              </button>
            )}
            {step < 11 ? (
              <button
                onClick={nextStep}
                className="flex items-center justify-center gap-2 px-4 py-2 text-white transition bg-indigo-600 rounded-lg sm:px-6 hover:bg-indigo-700"
              >
                Next <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center gap-2 px-4 py-2 text-white transition bg-green-600 rounded-lg sm:px-6 hover:bg-green-700"
              >
                <FaFileDownload className="w-4 h-4 sm:w-5 sm:h-5" /> Generate Resume
              </button>
            )}
          </div>
        </div>

        {/* ===== RIGHT PREVIEW ===== */}
        <div className="p-6 bg-white border border-gray-200 shadow-2xl sm:p-8 rounded-2xl">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800 sm:mb-6 sm:text-2xl">
            <FaEye className="w-5 h-5 text-indigo-600 sm:w-6 sm:h-6" /> Live Preview
          </h3>
          <div className="p-4 space-y-4 text-gray-800 border rounded-lg sm:p-6 sm:space-y-5 bg-gray-50">
            {formData.photo && (
              <img
                src={formData.photo}
                alt="Profile"
                className="object-cover w-20 h-20 mx-auto rounded-full shadow-md sm:w-24 sm:h-24"
              />
            )}
            <h2 className="text-xl font-bold text-center sm:text-2xl">{formData.name}</h2>
            <p className="text-sm text-center text-gray-600 sm:text-base">
              {formData.email} | {formData.phone}
            </p>
            <p className="text-sm text-center sm:text-base">{formData.address}</p>
            <p className="text-xs italic text-center text-gray-500 sm:text-sm">
              {resumeType.toUpperCase()} Resume
            </p>
            <hr className="my-4" />

            <div>
              <h4 className="font-semibold text-indigo-700">Summary</h4>
              <p>{formData.summary || "Not provided"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">Education</h4>
              <p>{formData.education || "Not provided"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">Experience</h4>
              <p>{formData.experience || "Not provided"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">Skills</h4>
              <p>{formData.skills || "Not provided"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">Projects</h4>
              <p>{formData.projects || "Not provided"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">Certifications</h4>
              <p>{formData.certifications || "Not provided"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">Achievements</h4>
              <p>{formData.achievements || "Not provided"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">Languages</h4>
              <p>{formData.languages || "Not provided"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700">Extracurriculars</h4>
              <p>{formData.extracurriculars || "Not provided"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
