import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfileSetup = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl px-6 py-12 mx-auto">
        <h2 className="mb-6 text-2xl font-bold text-indigo-600">Setup Your Profile</h2>
        <form className="p-6 space-y-4 bg-white shadow rounded-2xl">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
          <input type="number" placeholder="Age" className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Education" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Skills / Interests" className="w-full p-3 border rounded-lg"></textarea>
          <button className="w-full py-3 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Save Profile
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ProfileSetup;
