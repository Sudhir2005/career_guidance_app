import DashboardWidget from "../components/DashboardWidget";
import { FaCheckCircle, FaBriefcase, FaFileAlt } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Your Dashboard</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <DashboardWidget
          title="Completed Tests"
          value="5"
          icon={<FaCheckCircle />}
          color="bg-gradient-to-r from-green-400 to-green-600"
        />
        <DashboardWidget
          title="Saved Careers"
          value="3"
          icon={<FaBriefcase />}
          color="bg-gradient-to-r from-blue-400 to-blue-600"
        />
        <DashboardWidget
          title="Resume Score"
          value="85%"
          icon={<FaFileAlt />}
          color="bg-gradient-to-r from-purple-400 to-purple-600"
        />
      </div>

      <div className="p-6 mt-10 bg-white shadow-lg rounded-2xl">
        <h3 className="text-xl font-semibold text-gray-700">AI Insights</h3>
        <p className="mt-2 text-gray-500">
          This section will display personalized AI recommendations for your career journey.
        </p>
      </div>
    </div>
  );
}
