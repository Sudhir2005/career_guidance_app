import { useState } from "react";
import { FaRobot, FaRegCopy, FaSave, FaFileAlt } from "react-icons/fa";

export default function Aichat() {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    // Add your AI request handling here
    console.log("User message:", input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top header */}
      <div className="p-4 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-xl font-bold text-blue-600">AI Chat</h1>
      </div>

      {/* Chat area (empty initially) */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Empty for now */}
        <p className="text-gray-400 text-center mt-10">
          Start a conversation with AI...
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 gap-0 px-0 mb-20 ">
        <button className="flex items-center justify-center gap-2 px-4 py-3 text-blue-600 border border-blue-500 rounded-xl hover:bg-blue-50 transition">
          <FaFileAlt /> Summarize
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 text-blue-600 border border-blue-500 rounded-xl hover:bg-blue-50 transition">
          <FaRegCopy /> Copy Text
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 text-blue-600 border border-blue-500 rounded-xl hover:bg-blue-50 transition">
          <FaSave /> Save
        </button>
      </div>

      {/* Type bar */}
      <div className="p-3 bg-white shadow-inner">
        <div className="flex items-center gap-2 mt-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-purple-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-40 text-white"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-600 mb-40"
          >
            Ask AI
          </button>
        </div>
      </div>
    </div>
  );
}
