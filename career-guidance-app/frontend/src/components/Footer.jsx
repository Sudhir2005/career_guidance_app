const Footer = () => {
  return (
    <footer className="py-6 mt-10 text-gray-300 bg-gray-900">
      <div className="flex flex-col items-center justify-between px-4 mx-auto max-w-7xl md:flex-row">
        <p className="text-sm">&copy; {new Date().getFullYear()} CareerGuide. All rights reserved.</p>
        <div className="flex mt-3 space-x-4 md:mt-0">
          <a href="#" className="transition hover:text-white">About</a>
          <a href="#" className="transition hover:text-white">Contact</a>
          <a href="#" className="transition hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
