export default function ProfileSetup() {
  return (
    <div className="max-w-3xl p-6 mx-auto bg-white shadow rounded-2xl">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Profile Setup</h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-600">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-600">Career Interest</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Eg. Software Developer"
          />
        </div>
        <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
          Save Profile
        </button>
      </form>
    </div>
  );
}
