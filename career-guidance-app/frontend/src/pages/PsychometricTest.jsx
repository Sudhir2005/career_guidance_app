import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PsychometricTest = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl px-6 py-12 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-indigo-600">Psychometric Test</h2>
        <div className="p-6 bg-white shadow rounded-2xl">
          <p className="mb-4">Answer the following to discover your career fit:</p>
          <form className="space-y-4">
            <div>
              <p className="font-semibold">1. Do you enjoy solving logical problems?</p>
              <select className="w-full p-2 border rounded-lg">
                <option>Yes</option>
                <option>No</option>
                <option>Sometimes</option>
              </select>
            </div>
            <div>
              <p className="font-semibold">2. Do you prefer teamwork or solo work?</p>
              <select className="w-full p-2 border rounded-lg">
                <option>Teamwork</option>
                <option>Solo</option>
                <option>Both</option>
              </select>
            </div>
            <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Submit Test
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PsychometricTest;
