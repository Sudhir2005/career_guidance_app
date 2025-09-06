import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold text-center text-indigo-600">Register</h2>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button className="w-full py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
