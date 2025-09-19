import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function ProfileSetup({ updateSidebarUser }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    career: "",
    otherCareer: "",
    dob: "",
    bio: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef(null);

  // Load profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get("http://localhost:5000/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Format date to yyyy-MM-dd
        const dobFormatted = res.data.dob
          ? new Date(res.data.dob).toISOString().split("T")[0]
          : "";

        setForm({
          ...res.data,
          dob: dobFormatted,
        });
        if (res.data.imageData) setImagePreview(res.data.imageData);

        // Update sidebar if passed as prop
        if (updateSidebarUser) {
          updateSidebarUser({
            name: res.data.name,
            career: res.data.career,
            imageUrl: res.data.imageData,
          });
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };
    fetchProfile();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.career) e.career = "Please choose a career interest.";
    if (form.career === "Other" && !form.otherCareer.trim())
      e.otherCareer = "Please specify your career interest.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSaved(false);

    // Live update sidebar for name/career
    if (updateSidebarUser && (name === "name" || name === "career" || name === "otherCareer")) {
      const careerValue = form.career === "Other" ? form.otherCareer : form.career;
      updateSidebarUser({
        name: name === "name" ? value : form.name,
        career: name === "career" ? value : name === "otherCareer" ? value : careerValue,
        imageUrl: imagePreview,
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, image: "Please select an image file." }));
      return;
    }

    const MAX_BYTES = 2 * 1024 * 1024; // 2MB
    if (file.size > MAX_BYTES) {
      setErrors((prev) => ({ ...prev, image: "Image too large (max 2MB)." }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      setErrors((prev) => ({ ...prev, image: undefined }));

      if (updateSidebarUser) {
        updateSidebarUser({
          name: form.name,
          career: form.career === "Other" ? form.otherCareer : form.career,
          imageUrl: reader.result,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";

    if (updateSidebarUser) {
      updateSidebarUser({
        name: form.name,
        career: form.career === "Other" ? form.otherCareer : form.career,
        imageUrl: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setErrors({ submit: "User not authenticated." });
      return;
    }

    const toSave = {
      name: form.name,
      email: form.email,
      career: form.career === "Other" ? form.otherCareer : form.career,
      dob: form.dob,
      bio: form.bio,
      imageData: imagePreview || null,
    };

    try {
      await axios.put("http://localhost:5000/api/profile/update", toSave, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2200);
    } catch (err) {
      console.error("Error saving profile:", err.response || err);
      setErrors({ submit: "Failed to save profile to server." });
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", career: "", otherCareer: "", dob: "", bio: "" });
    setImagePreview("");
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";
    setSaved(false);

    if (updateSidebarUser) {
      updateSidebarUser({ name: "", career: "", imageUrl: "" });
    }
  };

  const inputBase =
    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-black placeholder-gray-400";

  return (
    <div className="flex flex-col max-w-5xl gap-6 p-6 mx-auto md:flex-row">
      {/* Sidebar live preview */}
      <div className="flex-col items-center hidden w-64 gap-4 p-4 bg-gray-100 rounded-lg shadow-md md:flex">
        <div className="w-32 h-32 overflow-hidden bg-gray-200 rounded-full">
          {imagePreview ? (
            <img src={imagePreview} alt="Profile Preview" className="object-cover w-full h-full" />
          ) : (
            <span className="text-gray-400">No Photo</span>
          )}
        </div>
        <h3 className="text-lg font-bold">{form.name || "Your Name"}</h3>
        <p className="text-sm text-gray-600">{form.email || "Your Email"}</p>
        <p className="text-sm text-gray-600">{form.career || "Your Career Interest"}</p>
        <p className="text-xs text-gray-500">{form.bio ? form.bio.slice(0, 50) + "..." : ""}</p>
      </div>

      {/* Main Form */}
      <div className="flex-1 p-6 bg-white shadow rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Profile Setup</h2>

        {saved && <div className="p-3 mb-4 text-sm text-green-800 bg-green-100 rounded">Profile saved!</div>}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Photo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center overflow-hidden bg-gray-100 border rounded-full w-28 h-28">
              {imagePreview ? (
                <img src={imagePreview} alt="Profile preview" className="object-cover w-full h-full" />
              ) : (
                <span className="text-gray-400">No Photo</span>
              )}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
              <div className="flex items-center gap-3 mt-1">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-700"
                />
                {imagePreview && (
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="px-3 py-1 text-sm text-gray-700 bg-white border rounded hover:bg-white hover:text-black"
                  >
                    Remove
                  </button>
                )}
              </div>
              {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
              <p className="mt-2 text-xs text-gray-500">PNG, JPG up to 2MB.</p>
            </div>
          </div>

          {/* Name, Email, Career, DOB, Bio */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className={inputBase}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className={inputBase}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Career Interest</label>
            <select
              name="career"
              value={form.career}
              onChange={handleChange}
              className={inputBase + " appearance-none"}
            >
              <option value="">Select</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Cloud Engineer">Cloud Engineer</option>
              <option value="AI/ML Engineer">AI/ML Engineer</option>
              <option value="Other">Other</option>
            </select>
            {errors.career && <p className="mt-1 text-sm text-red-600">{errors.career}</p>}
          </div>

          {form.career === "Other" && (
            <div>
              <label className="block mb-2 font-medium text-gray-700">Please specify</label>
              <input
                name="otherCareer"
                value={form.otherCareer}
                onChange={handleChange}
                type="text"
                placeholder="E.g. Blockchain Engineer"
                className={inputBase}
              />
              {errors.otherCareer && <p className="mt-1 text-sm text-red-600">{errors.otherCareer}</p>}
            </div>
          )}

          <div>
            <label className="block mb-2 font-medium text-gray-700">Date of Birth</label>
            <input
              name="dob"
              value={form.dob}
              onChange={handleChange}
              type="date"
              className={inputBase}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">About You</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Write a short bio (skills, interests, goals)…"
              className={inputBase + " resize-none"}
            />
          </div>

          {errors.submit && <p className="text-sm text-red-600">{errors.submit}</p>}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2 text-gray-700 bg-white border rounded-lg hover:bg-white hover:text-black"
            >
              Reset
            </button>

            <button type="submit" className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
