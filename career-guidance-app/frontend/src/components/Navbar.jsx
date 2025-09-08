import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardList,
  FaFileAlt,
  FaBriefcase,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/careers", label: "Careers", icon: <FaUserGraduate /> },
    { to: "/tests", label: "Tests", icon: <FaClipboardList /> },
    { to: "/resume", label: "Resume", icon: <FaFileAlt /> },
    { to: "/opportunities", label: "Jobs", icon: <FaBriefcase /> },
    { to: "/profile-setup", label: "Profile", icon: <FaUserCircle /> },
  ];

  return (
    <>
      {/* Top Bar: App Name + Sidebar Button */}
      <div className="flex items-center justify-between px-6 pt-4 mb-3">
        {/* App name shown only once */}
        <h1 className="text-5xl gryffindor-logo drop-shadow-lg">
  Gryffindor
</h1>


        {/* Minimal Sidebar Toggle Button */}
        <button
          className="p-2 text-gray-800 transition-transform duration-300 rounded-full shadow-md bg-white/20 backdrop-blur-md hover:text-indigo-600 hover:scale-110 md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white shadow-2xl transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center py-8 border-b border-gray-700 shadow-lg bg-gradient-to-r from-purple-900 to-indigo-900">
          <img
            src="https://via.placeholder.com/90"
            alt="Profile"
            className="w-24 h-24 border-4 border-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)]"
          />
          <h2 className="mt-3 text-xl font-extrabold tracking-wide text-white drop-shadow-lg">
            John Doe
          </h2>
          <p className="text-sm italic text-gray-300">Software Engineer</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-4 mt-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                location.pathname === item.to
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg"
                  : "hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Settings + Logout */}
        <div className="absolute w-full px-4 bottom-6">
          <Link
            to="/settings"
            className="flex items-center gap-3 p-3 transition rounded-lg hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700"
          >
            <FaCog /> Settings
          </Link>
          <button className="flex items-center w-full gap-3 p-3 text-left transition rounded-lg hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-3 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.5)] bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 backdrop-blur-md rounded-t-2xl md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center text-xs transition-all duration-300 ${
              location.pathname === item.to
                ? "text-yellow-300 scale-110 font-semibold drop-shadow-lg"
                : "hover:text-pink-300"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
