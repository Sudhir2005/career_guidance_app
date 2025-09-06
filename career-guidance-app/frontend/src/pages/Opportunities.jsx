export default function Opportunities() {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Opportunities</h2>

      <div className="space-y-6">
        <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-md">
          <h3 className="text-xl font-semibold">Internship - Web Development</h3>
          <p className="mt-2 text-gray-500">
            Work on real-world projects and enhance your coding skills.
          </p>
          <button className="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Apply Now
          </button>
        </div>

        <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-md">
          <h3 className="text-xl font-semibold">Research Program - AI & ML</h3>
          <p className="mt-2 text-gray-500">
            Collaborate with experts and contribute to groundbreaking research.
          </p>
          <button className="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
