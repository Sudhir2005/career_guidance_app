import { FaRocket, FaUserGraduate, FaBriefcase, FaFileAlt, FaRobot } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Scrollable content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Hello John,
          </h2>
          <p className="text-sm text-gray-500">
            How can I assist you today?
          </p>
        </div>

        {/* Ask AI Section */}
        <div className="p-4 mb-6 bg-white shadow-md rounded-2xl">
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
        <div className="flex justify-center mb-6">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/data-analysis-illustration-download-in-svg-png-gif-file-formats--analyzing-growth-report-marketing-pack-business-illustrations-4300601.png"
            alt="Dashboard Illustration"
            className="w-56"
          />
        </div>

        {/* Cards Section */}
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-white shadow-md rounded-2xl">
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

      {/* Footer (already from Navbar/Footer component, so no duplication here) */}
    </div>
  );
}
