import Footer from "../components/Footer";
import Card from "../components/Card";

const CareerExplorer = () => {
  const careers = [
    {
      title: "Software Engineer",
      description: "Design and build scalable applications with cutting-edge technologies.",
      buttonText: "Explore",
    },
    {
      title: "Data Scientist",
      description: "Analyze complex datasets and create predictive AI-driven models.",
      buttonText: "Explore",
    },
    {
      title: "Product Manager",
      description: "Lead cross-functional teams to deliver impactful products.",
      buttonText: "Explore",
    },
  ];

  return (
    <>
      {/* Page Content */}
      <main className="max-w-6xl px-6 py-12 mx-auto">
        {/* Page Heading */}
        <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text">
          Career Explorer
        </h1>

        {/* Careers Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {careers.map((career, i) => (
            <Card key={i} {...career} />
          ))}
        </div>
      </main>
    </>
  );
};

export default CareerExplorer;
