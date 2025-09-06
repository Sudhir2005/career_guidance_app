import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Opportunities = () => {
  const opportunities = [
    { title: "Internship - Web Dev", description: "Remote, 3 months, stipend ₹10k", buttonText: "Apply" },
    { title: "Hackathon - AI Challenge", description: "National level, prizes up to ₹1L", buttonText: "Register" },
    { title: "Workshop - Cloud Computing", description: "Free, Online", buttonText: "Join" },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl px-6 py-12 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-indigo-600">Opportunities</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {opportunities.map((op, i) => (
            <Card key={i} {...op} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Opportunities;
