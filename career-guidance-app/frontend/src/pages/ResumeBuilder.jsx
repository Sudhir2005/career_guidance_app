import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResumeBuilder = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl px-6 py-12 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-indigo-600">Resume Builder</h2>
        <form className="p-6 space-y-4 bg-white shadow rounded-2xl">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Education" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Experience" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Skills" className="w-full p-3 border rounded-lg"></textarea>
          <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Generate Resume
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ResumeBuilder;
