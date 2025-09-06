import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardWidget from "../components/DashboardWidget";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl px-6 py-12 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-indigo-600">Your Dashboard</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <DashboardWidget title="Completed Tests" value="5" icon="📊" color="bg-gradient-to-r from-indigo-500 to-purple-600" />
          <DashboardWidget title="Saved Careers" value="3" icon="💼" color="bg-gradient-to-r from-green-500 to-teal-500" />
          <DashboardWidget title="Resume Score" value="85%" icon="📄" color="bg-gradient-to-r from-yellow-500 to-orange-500" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
