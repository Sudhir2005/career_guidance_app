import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardList,
  FaFileAlt,
  FaBriefcase,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 text-white shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 backdrop-blur-md">
        <h1 className="text-2xl font-extrabold tracking-wide">
          Gryffin<span className="text-yellow-400">dor</span>
        </h1>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-2 text-white shadow-2xl bg-gradient-to-r from-indigo-700 to-purple-700 backdrop-blur-md rounded-t-2xl">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center text-xs transition-all duration-300 ${
              location.pathname === item.to
                ? "text-yellow-400 scale-110 font-semibold"
                : "hover:text-yellow-300"
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
