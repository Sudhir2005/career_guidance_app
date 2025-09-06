// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CareerExplorer from "./pages/CareerExplorer";
import Opportunities from "./pages/Opportunities";
import ProfileSetup from "./pages/ProfileSetup";
import PsychometricTest from "./pages/PsychometricTest";
import ResumeBuilder from "./pages/ResumeBuilder";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow p-6">
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Dashboard />} />

          {/* Core Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/careers" element={<CareerExplorer />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/tests" element={<PsychometricTest />} />
          <Route path="/resume" element={<ResumeBuilder />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
