import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileSetup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    educationLevel: "",
    stream: "",
    engagingSubject: "",
    activities: "",
    careerPath: "",
    excitingField: "",
    learningStyle: "",
    problemSolving: "",
    preferredWork: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data Submitted:", formData);
    // 👉 TODO: send formData to backend via axios.post("/api/profile", formData)
    navigate("/dashboard"); // move to dashboard after save
  };

  return (
    <div className="max-w-2xl p-6 mx-auto mt-10 bg-white rounded shadow">
      <h2 className="mb-1 text-2xl font-bold text-blue-600">Profile Setup</h2>
      <p className="mb-6 text-gray-600">Tell us more about yourself to get better career guidance.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Education Level */}
        <div>
          <label className="block mb-2 font-semibold">Highest Education Level *</label>
          <select
            name="educationLevel"
            className="w-full p-3 bg-white border rounded"
            value={formData.educationLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select education level</option>
            <option value="10th">📚 10th</option>
            <option value="12th">📚 12th</option>
            <option value="undergraduate">🎓 Undergraduate</option>
            <option value="postgraduate">🎓 Postgraduate</option>
          </select>
        </div>

        {/* Stream */}
        <div>
          <label className="block mb-2 font-semibold">Which stream do you belong? *</label>
          <select
            name="stream"
            className="w-full p-3 bg-white border rounded"
            value={formData.stream}
            onChange={handleChange}
            required
          >
            <option value="">Select stream</option>
            <option value="bio-maths">Bio Maths</option>
            <option value="computer-science">Computer Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts/Humanities</option>
          </select>
        </div>

        {/* Engaging Subject */}
        <div>
          <label className="block mb-2 font-semibold">Which subject do you find most engaging? *</label>
          <select
            name="engagingSubject"
            className="w-full p-3 bg-white border rounded"
            value={formData.engagingSubject}
            onChange={handleChange}
            required
          >
            <option value="">Choose subject</option>
            <option value="biology">Biology</option>
            <option value="maths">Maths</option>
            <option value="chemistry">Chemistry</option>
            <option value="physics">Physics</option>
            <option value="economics">Economics</option>
          </select>
        </div>

        {/* Activities */}
        <div>
          <label className="block mb-2 font-semibold">What kind of activities do you enjoy outside school? *</label>
          <select
            name="activities"
            className="w-full p-3 bg-white border rounded"
            value={formData.activities}
            onChange={handleChange}
            required
          >
            <option value="">Select activity</option>
            <option value="sports">Sports</option>
            <option value="arts-music">Arts or Music</option>
            <option value="reading">Reading & Writing</option>
            <option value="volunteering">Volunteering</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Career Path */}
        <div>
          <label className="block mb-2 font-semibold">What career path excites you the most? *</label>
          <select
            name="careerPath"
            className="w-full p-3 bg-white border rounded"
            value={formData.careerPath}
            onChange={handleChange}
            required
          >
            <option value="">Choose career path</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="designer">Designer</option>
            <option value="researcher">Researcher</option>
          </select>
        </div>

        {/* Exciting Field */}
        <div>
          <label className="block mb-2 font-semibold">Which field excites you the most? *</label>
          <select
            name="excitingField"
            className="w-full p-3 bg-white border rounded"
            value={formData.excitingField}
            onChange={handleChange}
            required
          >
            <option value="">Select field</option>
            <option value="technology">Technology & Computers</option>
            <option value="medicine">Medicine & Healthcare</option>
            <option value="business">Business & Entrepreneurship</option>
            <option value="arts">Arts & Design</option>
            <option value="science">Science & Research</option>
          </select>
        </div>

        {/* EXTRA QUESTIONS */}

        {/* Learning Style */}
        <div>
          <label className="block mb-2 font-semibold">How do you prefer learning new things? *</label>
          <select
            name="learningStyle"
            className="w-full p-3 bg-white border rounded"
            value={formData.learningStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select learning style</option>
            <option value="visual">Visual (Diagrams, Videos)</option>
            <option value="hands-on">Hands-on Practice</option>
            <option value="theory">Reading & Theory</option>
            <option value="collaborative">Collaborative/Group Work</option>
          </select>
        </div>

        {/* Problem Solving */}
        <div>
          <label className="block mb-2 font-semibold">Do you enjoy solving problems & puzzles? *</label>
          <select
            name="problemSolving"
            className="w-full p-3 bg-white border rounded"
            value={formData.problemSolving}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes, very much</option>
            <option value="sometimes">Sometimes</option>
            <option value="no">Not really</option>
          </select>
        </div>

        {/* Work Preference */}
        <div>
          <label className="block mb-2 font-semibold">Which work environment suits you best? *</label>
          <select
            name="preferredWork"
            className="w-full p-3 bg-white border rounded"
            value={formData.preferredWork}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="teamwork">Teamwork & Collaboration</option>
            <option value="independent">Independent Work</option>
            <option value="creative">Creative & Flexible</option>
            <option value="structured">Structured & Organized</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 mt-6 text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}
