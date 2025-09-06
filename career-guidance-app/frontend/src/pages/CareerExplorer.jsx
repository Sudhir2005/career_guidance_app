import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const CareerExplorer = () => {
  const careers = [
    { title: "Software Engineer", description: "Build scalable apps.", buttonText: "Explore" },
    { title: "Data Scientist", description: "Analyze and predict data trends.", buttonText: "Explore" },
    { title: "Product Manager", description: "Lead products to success.", buttonText: "Explore" },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl px-6 py-12 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-indigo-600">Career Explorer</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {careers.map((c, i) => (
            <Card key={i} {...c} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerExplorer;
