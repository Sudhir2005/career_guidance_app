import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300" />
          <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Register</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
