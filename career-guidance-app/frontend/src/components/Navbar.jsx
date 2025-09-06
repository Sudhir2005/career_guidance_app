import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide text-white">
            CareerGuide
          </Link>

          {/* Navigation Links */}
          <div className="hidden space-x-6 md:flex">
            <Link to="/dashboard" className="text-white transition hover:text-gray-200">
              Dashboard
            </Link>
            <Link to="/career-explorer" className="text-white transition hover:text-gray-200">
              Careers
            </Link>
            <Link to="/psychometric-test" className="text-white transition hover:text-gray-200">
              Tests
            </Link>
            <Link to="/resume-builder" className="text-white transition hover:text-gray-200">
              Resume
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-indigo-600 bg-white rounded-lg shadow hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 font-semibold text-gray-900 bg-yellow-400 rounded-lg shadow hover:bg-yellow-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
