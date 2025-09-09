import { useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaPhotoVideo,
  FaEye,
} from "react-icons/fa";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
    photo: null, // image preview
  });

  const [step, setStep] = useState(1);

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

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to generate resume");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.docx";
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating resume:", error);
      alert("Something went wrong while generating your resume.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-12 bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Form */}
        <div className="p-8 bg-white shadow-xl rounded-3xl">
          <h2 className="mb-8 text-3xl font-extrabold text-center text-indigo-700">
            Resume Builder
          </h2>

          {/* Step Navigation */}
          <div className="flex justify-between mb-6 text-sm font-medium text-gray-600">
            {["Personal", "Education", "Experience", "Skills", "Photo"].map(
              (label, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full ${
                    step === i + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {label}
                </span>
              )
            )}
          </div>

          {/* Form Sections */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-700">
                <FaUser className="text-indigo-600" /> Personal Info
              </h3>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-700">
                <FaGraduationCap className="text-indigo-600" /> Education
              </h3>
              <textarea
                name="education"
                placeholder="Degrees, Institutions, Years"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-700">
                <FaBriefcase className="text-indigo-600" /> Experience
              </h3>
              <textarea
                name="experience"
                placeholder="Job titles, Companies, Duration"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-700">
                <FaTools className="text-indigo-600" /> Skills
              </h3>
              <textarea
                name="skills"
                placeholder="Professional skills (comma-separated)"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {step === 5 && (
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-700">
                <FaPhotoVideo className="text-indigo-600" /> Upload Photo
              </h3>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhoto}
                className="w-full"
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-2 text-gray-800 bg-gray-300 rounded-lg"
              >
                Back
              </button>
            )}
            {step < 5 ? (
              <button
                onClick={nextStep}
                className="px-6 py-2 text-white bg-indigo-600 rounded-lg"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 text-white bg-green-600 rounded-lg"
              >
                Generate Resume
              </button>
            )}
          </div>
        </div>

        {/* Right Preview */}
        <div className="p-8 bg-white shadow-xl rounded-3xl">
          <h3 className="flex items-center gap-2 mb-4 text-2xl font-bold text-gray-800">
            <FaEye className="text-indigo-600" /> Live Preview
          </h3>
          <div className="p-6 space-y-4 text-gray-800 border rounded-lg bg-gray-50">
            {formData.photo && (
              <img
                src={formData.photo}
                alt="Profile"
                className="w-24 h-24 mx-auto rounded-full"
              />
            )}
            <h2 className="text-2xl font-bold text-center">{formData.name}</h2>
            <p className="text-center text-gray-600">
              {formData.email} | {formData.phone}
            </p>
            <p className="text-center">{formData.address}</p>
            <hr />
            <h4 className="font-semibold text-indigo-700">Education</h4>
            <p>{formData.education}</p>
            <h4 className="font-semibold text-indigo-700">Experience</h4>
            <p>{formData.experience}</p>
            <h4 className="font-semibold text-indigo-700">Skills</h4>
            <p>{formData.skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
