import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; 
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardList,
  FaFileAlt,
  FaBriefcase,
  FaUserCircle,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar({ sidebarUserUpdater }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const [user, setUser] = useState({ name: "", career: "", imageUrl: "" });

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/careers", label: "Careers", icon: <FaUserGraduate /> },
    { to: "/tests", label: "Tests", icon: <FaClipboardList /> },
    { to: "/resume", label: "Resume", icon: <FaFileAlt /> },
    { to: "/opportunities", label: "Jobs", icon: <FaBriefcase /> },
    { to: "/profile-setup", label: "Profile", icon: <FaUserCircle /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // ✅ Fetch profile with Axios
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get("http://localhost:5000/api/profile/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser({
          name: res.data.name || "",
          career: res.data.career || "",
          imageUrl: res.data.imageUrl || res.data.imageData || "",
        });

        if (sidebarUserUpdater) sidebarUserUpdater(setUser);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  // Close sidebar if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
      {/* Top Navbar */}
      <div className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 mb-4 shadow-md bg-white/30 backdrop-blur-md rounded-b-2xl">
        <h1 className="text-4xl font-extrabold tracking-wide text-transparent gryffindor-logo bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text drop-shadow-lg">
          Career Guide
        </h1>

        <button
          className="p-2 text-gray-800 transition-transform duration-300 rounded-full shadow-lg bg-white/70 hover:text-indigo-600 hover:scale-110 md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/20 md:hidden"></div>}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white shadow-2xl transform transition-transform duration-300 z-50 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center py-8 border-b border-gray-700 shadow-md bg-gradient-to-r from-purple-800 to-indigo-900 rounded-br-3xl">
          <img
            src={
              user.imageUrl ||
              "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
            }
            alt="Profile"
            className="w-24 h-24 border-4 border-pink-500 rounded-full shadow-lg"
          />
          <h2 className="mt-3 text-lg font-bold tracking-wide">{user.name || "Loading..."}</h2>
          <p className="text-sm italic text-gray-300">{user.career || "Fetching career..."}</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-5 mt-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                location.pathname === item.to
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-md"
                  : "hover:bg-white/10 hover:shadow-lg"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="absolute w-full px-5 bottom-6">
          <button
            onClick={handleLogout}
            className="flex items-center w-full gap-3 px-4 py-3 text-left transition rounded-lg hover:bg-white/10"
          >
            <FaSignOutAlt /> <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-around py-3 text-white shadow-lg bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 backdrop-blur-md rounded-t-2xl md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setSidebarOpen(false)}
            className={`flex flex-col items-center text-xs px-3 py-2 rounded-lg transition-all duration-300 ${
              location.pathname === item.to
                ? "bg-white/20 text-white font-semibold scale-110 shadow-md"
                : "text-white hover:text-gray-300"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
