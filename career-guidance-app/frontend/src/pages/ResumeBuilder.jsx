export default function ResumeBuilder() {
  return (
    <div className="max-w-5xl p-6 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Resume Builder</h2>

      <div className="p-6 bg-white shadow-lg rounded-2xl">
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-600">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300" />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Education</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"></textarea>
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Experience</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"></textarea>
          </div>
          <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Generate Resume</button>
        </form>
      </div>
    </div>
  );
}
