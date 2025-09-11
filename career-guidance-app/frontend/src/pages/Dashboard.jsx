import { FaRocket, FaUserGraduate, FaBriefcase, FaFileAlt, FaRobot, FaFutbol } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Scrollable content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Greeting */}
        <div className="mt-[-30px]">
          <h2 className="text-xl font-semibold text-gray-800">
            Hello John,
          </h2>
          <p className="text-sm text-gray-500">
            How can I assist you today?
          </p>
        </div>

        {/* Ask AI Section */}
        <div className="p-4 mb-6 bg-white shadow-md rounded-2xl mt-[-5px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Ask AI</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link
              to="/gallery"
              className="py-3 text-center text-white transition bg-red-500 rounded-xl hover:bg-red-600"
            >
              Gallery Mode
            </Link>
            <Link
              to="/aichat"
              className="py-3 text-center text-white transition bg-red-500 rounded-xl hover:bg-red-600"
            >
              Ask AI
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center ">
          <img
            src=""
            alt=""
            className="w-56"
          />
        </div>

        {/* Cards Section */}
        <div className="mt-[-20px]">
        <div className="space-y-4 ">
          <div className="flex items-center p-4 bg-white shadow-md rounded-2xl  ">
            <div className="p-3 mr-4 bg-red-100 rounded-full">
              <FaRocket className="text-xl text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Explore</h4>
              <p className="text-sm text-gray-500">Find your joy</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white shadow-md rounded-2xl">
            <div className="p-3 mr-4 bg-red-100 rounded-full">
              <FaUserGraduate className="text-xl text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Psychometric Test Page</h4>
              <p className="text-sm text-gray-500">Know about you</p>
            </div>
          </div>

          {/* Extra Curricular Activities */}
          <Link
            to="/extracurriculars"
            className="flex items-center p-4 bg-white shadow-md rounded-2xl hover:bg-gray-50"
          >
            <div className="p-3 mr-4 bg-red-100 rounded-full">
              <FaFutbol className="text-xl text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Extra Curricular Activities</h4>
              <p className="text-sm text-gray-500" style={{fontWeight:400}}>
                Discover and explore your talents beyond academics.
              </p>
            </div>
          </Link>

          <div className="flex items-center p-4 bg-white shadow-md rounded-2xl">
            <div className="p-3 mr-4 bg-red-100 rounded-full">
              <FaBriefcase className="text-xl text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Portfolio</h4>
              <p className="text-sm text-gray-500">Fetch your details</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white shadow-md rounded-2xl">
            <div className="p-3 mr-4 bg-red-100 rounded-full">
              <FaRobot className="text-xl text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Document AI</h4>
              <p className="text-sm text-gray-500">Process document with AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
