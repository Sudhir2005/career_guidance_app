import { Link } from "react-router-dom";
import { FaRocket, FaUserGraduate, FaBriefcase, FaRobot, FaRunning } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Scrollable content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Greeting */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Hello John,</h2>
          <p className="text-sm text-gray-500">How can I assist you today?</p>
        </div>

        {/* Ask AI Section */}
        <div className="p-4 mb-8 bg-white shadow-md rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Ask AI</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 text-white transition bg-red-500 rounded-xl hover:bg-red-600">
              Gallery Mode
            </button>
            <button className="py-3 text-white transition bg-red-500 rounded-xl hover:bg-red-600">
              Ask AI
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/data-analysis-illustration-download-in-svg-png-gif-file-formats--analyzing-growth-report-marketing-pack-business-illustrations-4300601.png"
            alt="Dashboard Illustration"
            className="w-56"
          />
        </div>

        {/* Cards Section */}
        <div>
          {/* Explore */}
          <div className="flex items-center p-4 mb-5 bg-white shadow-md rounded-2xl">
            <div className="p-3 mr-4 bg-red-100 rounded-full">
              <FaRocket className="text-xl text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Explore</h4>
              <p className="text-sm text-gray-500">Find your joy</p>
            </div>
          </div>

          {/* Psychometric Test */}
          <div className="flex items-center p-4 mb-5 bg-white shadow-md rounded-2xl">
            <div className="p-3 mr-4 bg-red-100 rounded-full">
              <FaUserGraduate className="text-xl text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Psychometric Test Page
              </h4>
              <p className="text-sm text-gray-500">Know about you</p>
            </div>
          </div>

          {/* Extra Curricular Activities */}
          <Link to="/extracurriculars">
            <div className="flex items-center p-4 mb-5 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
              <div className="p-3 mr-4 bg-red-100 rounded-full">
                <FaRunning className="text-xl text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Extra Curricular Activities
                </h4>
                <p className="text-sm text-gray-500 font-normal">
                  Interests beyond academics
                </p>
              </div>
            </div>
          </Link>

          {/* Portfolio */}
          <div className="flex items-center p-4 mb-5 bg-white shadow-md rounded-2xl">
            <div className="p-3 mr-4 bg-red-100 rounded-full">
              <FaBriefcase className="text-xl text-red-500" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Portfolio</h4>
              <p className="text-sm text-gray-500">Fetch your details</p>
            </div>
          </div>

          {/* Document AI */}
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
  );
}
