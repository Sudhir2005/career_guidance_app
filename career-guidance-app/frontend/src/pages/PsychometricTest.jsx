export default function PsychometricTest() {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Psychometric Test</h2>
      <p className="mb-6 text-gray-600">
        Answer a set of questions to understand your skills, personality, and interests.
      </p>

      <div className="p-6 bg-white shadow-md rounded-xl">
        <p className="text-gray-700">Q1: Do you enjoy solving logical problems?</p>
        <div className="mt-4 space-x-4">
          <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Yes</button>
          <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">No</button>
        </div>
      </div>
    </div>
  );
}
