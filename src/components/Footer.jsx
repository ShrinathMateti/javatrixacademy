import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Javatrix Academy
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Master Java and backend development with structured courses,
            hands-on coding, and expert mentorship. Learn smarter, code better.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white transition">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>
              Email:{" "}
              <a
                href="mailto:support@javatrix.in"
                className="hover:text-white transition"
              >
                support@javatrix.in
              </a>
            </li>
            <li>
              Phone: <span className="font-medium">+91-9876543210</span>
            </li>
            <li>Location: India (Remote)</li>
          </ul>

          
          <div className="flex space-x-4 text-xl">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-slate-700 pt-4 text-sm text-slate-500 space-y-1">
        <p>
          © {new Date().getFullYear()} Javatrix Academy. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition font-medium"
          >
            Shrinath Mateti
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
