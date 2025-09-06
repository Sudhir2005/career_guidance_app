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
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Hide nav when footer is in view
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setShowNav(footerTop > window.innerHeight - 80);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/careers", label: "Careers", icon: <FaUserGraduate /> },
    { to: "/tests", label: "Tests", icon: <FaClipboardList /> },
    { to: "/resume", label: "Resume", icon: <FaFileAlt /> },
    { to: "/opportunities", label: "Opportunities", icon: <FaBriefcase /> },
    { to: "/profile-setup", label: "Profile", icon: <FaUserCircle /> },
  ];

  if (!showNav) return null;

  return (
    <>
      {/* Header (App Name + Toggle) */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 text-white shadow-md bg-gradient-to-r from-indigo-600 to-purple-600">
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          Career<span className="text-yellow-400">Guide</span>
        </Link>
        {/* Toggle button only for desktop */}
        <button
          className="hidden text-xl md:block"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex fixed top-16 left-0 h-full transition-all duration-300 bg-gradient-to-b from-indigo-700 to-purple-700 text-white shadow-lg flex-col py-6 ${
          sidebarOpen ? "w-56 px-4" : "w-16 items-center"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center space-x-3 p-2 rounded-lg transition ${
                location.pathname === item.to
                  ? "bg-yellow-400 text-black font-semibold"
                  : "hover:bg-indigo-600"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around py-2 text-white shadow-lg md:hidden bg-gradient-to-r from-indigo-700 to-purple-700">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center text-sm ${
              location.pathname === item.to
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
