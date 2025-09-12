
import React, { useEffect, useRef, useState } from "react";

export default function ProfileSetup() {
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

  // Load saved profile if present
  useEffect(() => {
    try {
      const raw = localStorage.getItem("profileData");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setForm((s) => ({ ...s, ...parsed }));
      if (parsed.imageData) setImagePreview(parsed.imageData);
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      // ignore
    }
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
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    const toSave = {
      name: form.name,
      email: form.email,
      career: form.career === "Other" ? form.otherCareer : form.career,
      dob: form.dob,
      bio: form.bio,
      imageData: imagePreview || null,
      savedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem("profileData", JSON.stringify(toSave));
      setSaved(true);
      setTimeout(() => setSaved(false), 2200);
    } catch {
      setErrors({ submit: "Unable to save in this browser." });
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", career: "", otherCareer: "", dob: "", bio: "" });
    setImagePreview("");
    setErrors({});
    localStorage.removeItem("profileData");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setSaved(false);
  };

  // Shared input classes to ensure white background and black text
  const inputBase =
    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-black placeholder-gray-400";

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white shadow rounded-2xl">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Profile Setup</h2>

      {saved && <div className="mb-4 p-3 text-sm text-green-800 bg-green-100 rounded">Profile saved!</div>}
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Photo */}
        <div className="flex items-center gap-4">
          <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border">
            {imagePreview ? (

              <img src={imagePreview} alt="Profile preview" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400">No Photo</span>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
            <div className="mt-1 flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-700"
              />
              {imagePreview && (
                <button type="button" onClick={handleRemoveImage} className="px-3 py-1 text-sm border rounded">
                  Remove
                </button>
              )}
            </div>
            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
            <p className="mt-2 text-xs text-gray-500">PNG, JPG up to 2MB.</p>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            className={inputBase}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className={inputBase}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Career Interest */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Career Interest</label>
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
            <label className="block mb-2 text-gray-700 font-medium">Please specify</label>
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

        {/* Date of Birth */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">Date of Birth</label>
          <input
            name="dob"
            value={form.dob}
            onChange={handleChange}
            type="date"
            className={inputBase}
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">About You</label>
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
          <button type="button" onClick={handleReset} className="px-5 py-2 border rounded-lg hover:bg-gray-50">
            Reset
          </button>

          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Save Profile
          </button>
        </div>
      </form>

      {/* Extra bottom spacing to prevent fixed bottom nav from overlapping content on mobile */}
      <div className="h-24 md:hidden" />
    </div>
  );
}
