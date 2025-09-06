import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="mt-4 text-gray-700">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-3 mt-6 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
