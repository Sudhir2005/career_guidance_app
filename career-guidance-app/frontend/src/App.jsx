import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

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
import ExtraCurriculars from "./pages/ExtraCurriculars";
import Aichat from "./pages/Aichat";
import EducationLevelSelector from "./pages/EducationLevelSelector";

function App() {
  const location = useLocation();

  // Routes where Navbar should NOT appear
  const authRoutes = ["/login", "/register"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Conditionally render Navbar */}
      {!authRoutes.includes(location.pathname) && <Navbar />}

      {/* Main content area */}
      <main className="flex-grow p-6">
        <Routes>
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Core Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/careers" element={<CareerExplorer />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/tests" element={<PsychometricTest />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/extracurriculars" element={<ExtraCurriculars />} />
          <Route path="/aichat" element={<Aichat />} />
          <Route path="/education" element={<EducationLevelSelector />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
