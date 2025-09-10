

export default function ExtraCurriculars() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
    

      {/* Main Content */}
      <main className="flex-1 px-6 py-10">
        {/* Stylish Heading */}
        <h1 className="text-3xl font-extrabold text-center text-blue-600 drop-shadow-md tracking-wide mb-8">
          Explore Your Other Interests!
        </h1>

        {/* Search Section */}
        <div className="flex flex-col items-center">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Eg. Guitar class"
            className="w-full max-w-md px-5 py-3 mb-4 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Smaller Search Button */}
          <button className="w-32 px-4 py-2 text-sm font-medium text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
            Search
          </button>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
}
