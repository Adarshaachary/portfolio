import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Adarsha
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">

          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
          <li><a href="#courses" className="hover:text-cyan-400">Courses</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900">

          <a
            href="#home"
            onClick={closeMenu}
            className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-800"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-800"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-800"
          >
            Skills
          </a>

          <a
            href="#education"
            onClick={closeMenu}
            className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-800"
          >
            Education
          </a>

          <a
            href="#courses"
            onClick={closeMenu}
            className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-800"
          >
            Courses
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-800"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="block px-6 py-4 hover:bg-gray-800"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;