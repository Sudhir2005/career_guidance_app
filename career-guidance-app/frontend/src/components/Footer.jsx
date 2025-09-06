export default function Footer() {
  return (
    <footer className="py-8 mt-10 text-gray-300 bg-gray-900">
      <div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row">
        <p className="text-sm">© 2025 CareerGuide. All rights reserved.</p>

        <div className="flex mt-4 space-x-6 md:mt-0">
          <a href="/about" className="transition hover:text-white">About</a>
          <a href="/contact" className="transition hover:text-white">Contact</a>
          <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
