import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="mt-4 text-lg text-gray-600">Oops! The page you are looking for doesn’t exist.</p>
      <Link to="/" className="px-6 py-2 mt-6 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
        Go Back Home
      </Link>
    </div>
  );
}
