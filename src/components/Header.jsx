import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import EnrollPopup from "./EnrollPopup";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white tracking-wide animate-pulse transition delay-3"
        >
          <FontAwesomeIcon icon={faLaptopCode} className="text-3xl" />
          Javatrix Academy
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-md font-medium">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/courses" className="hover:text-gray-400 transition">Courses</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-slate-800 px-4 py-2 rounded-full hover:bg-slate-400 cursor-pointer transition font-semibold"
          >
            Enroll
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-4 space-y-4 text-sm">
          <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/about" className="block hover:text-gray-400">About</Link>
          <Link to="/courses" className="block hover:text-gray-400">Courses</Link>
          <Link to="/contact" className="block hover:text-gray-400">Contact</Link>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="w-full bg-white text-slate-800 px-4 py-2 rounded-full text-center hover:bg-slate-400 transition font-semibold"
          >
            Enroll
          </button>
        </div>
      )}

      {/* Enroll Popup */}
      <EnrollPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </header>
  );
};

export default Header;
