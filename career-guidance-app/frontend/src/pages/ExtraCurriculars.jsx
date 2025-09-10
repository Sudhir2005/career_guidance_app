export default function ExtraCurriculars() {
  return (
    <div className="flex flex-col  h-full bg-gray-50">
      {/* Navbar component here */}

      {/* Content below navbar */}
      <div className="flex flex-col items-center mt-24 px-6">
          <h1 className="text-3xl font-extrabold text-center text-blue-600 drop-shadow-md tracking-wide mb-8">
          Explore Your Other Interests!
        </h1>

        <input
          type="text"
          placeholder="Eg. Guitar class"
          className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Footer component here */}
    </div>
  );
}
