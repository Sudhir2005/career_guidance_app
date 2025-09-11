import { useState } from "react";
import { Link } from "react-router-dom";

export default function EducationLevelSelector() {
  const [educationLevel, setEducationLevel] = useState("");

  const educationOptions = [
    { value: "", label: "Select education level" },
    { value: "gce_ordinary", label: "📚 10th" },
    { value: "gce_ordinary", label: "📚 12th" },
    
    
  ];

  return (
    <div className="education-selector p-6 max-w-md mx-auto mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-1 text-blue-500">Education</h2>
      <p className="mb-4 text-gray-600">Your academic background</p>

      <label className="block mb-2 font-semibold mt-4" htmlFor="education-level">
        Highest Education Level *
      </label>
      <select
        id="education-level"
        className="w-full p-3 border rounded bg-white "
        value={educationLevel}
        onChange={(e) => setEducationLevel(e.target.value)}
        required
      >
        {educationOptions.map(({ value, label }) => (
          <option key={value} value={value} disabled={value === ""}>
            {label}
          </option>
        ))}
      </select>

      {/* Continue button navigates via Link */}
      <Link to="/dashboard">
        <button
          className="mt-4 w-full py-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
          disabled={!educationLevel}
        >
          Continue
        </button>
      </Link>
    </div>
  );
}