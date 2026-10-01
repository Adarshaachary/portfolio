import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        bg-black/90 backdrop-blur-md
        text-white shadow-lg z-50
        animate-[navbarDrop_0.8s_ease-out]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          className="
            text-2xl font-bold text-cyan-400
            transition-all duration-300
            hover:text-cyan-300
            hover:scale-105
            hover:[text-shadow:0_0_15px_rgba(34,211,238,0.7)]
          "
        >
          Adarsha
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">

          <li>
            <a
              href="#home"
              className="
                inline-block
                transition-all duration-300
                hover:text-cyan-400
                hover:-translate-y-0.5
              "
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="
                inline-block
                transition-all duration-300
                hover:text-cyan-400
                hover:-translate-y-0.5
              "
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="
                inline-block
                transition-all duration-300
                hover:text-cyan-400
                hover:-translate-y-0.5
              "
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="
                inline-block
                transition-all duration-300
                hover:text-cyan-400
                hover:-translate-y-0.5
              "
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#courses"
              className="
                inline-block
                transition-all duration-300
                hover:text-cyan-400
                hover:-translate-y-0.5
              "
            >
              Courses
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="
                inline-block
                transition-all duration-300
                hover:text-cyan-400
                hover:-translate-y-0.5
              "
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="
                inline-block
                transition-all duration-300
                hover:text-cyan-400
                hover:-translate-y-0.5
              "
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="
            md:hidden text-2xl
            transition-all duration-300
            hover:text-cyan-400
            hover:scale-110
            active:scale-90
          "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className="
              block transition-all duration-300
              transform
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-gray-900 overflow-hidden
          transition-all duration-500 ease-in-out
          ${
            menuOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }
        `}
      >

        <a
          href="#home"
          onClick={closeMenu}
          className="
            block px-6 py-4 border-b border-gray-700
            transition-all duration-300
            hover:bg-gray-800 hover:text-cyan-400
            hover:pl-8
          "
        >
          Home
        </a>

        <a
          href="#about"
          onClick={closeMenu}
          className="
            block px-6 py-4 border-b border-gray-700
            transition-all duration-300
            hover:bg-gray-800 hover:text-cyan-400
            hover:pl-8
          "
        >
          About
        </a>

        <a
          href="#skills"
          onClick={closeMenu}
          className="
            block px-6 py-4 border-b border-gray-700
            transition-all duration-300
            hover:bg-gray-800 hover:text-cyan-400
            hover:pl-8
          "
        >
          Skills
        </a>

        <a
          href="#education"
          onClick={closeMenu}
          className="
            block px-6 py-4 border-b border-gray-700
            transition-all duration-300
            hover:bg-gray-800 hover:text-cyan-400
            hover:pl-8
          "
        >
          Education
        </a>

        <a
          href="#courses"
          onClick={closeMenu}
          className="
            block px-6 py-4 border-b border-gray-700
            transition-all duration-300
            hover:bg-gray-800 hover:text-cyan-400
            hover:pl-8
          "
        >
          Courses
        </a>

        <a
          href="#projects"
          onClick={closeMenu}
          className="
            block px-6 py-4 border-b border-gray-700
            transition-all duration-300
            hover:bg-gray-800 hover:text-cyan-400
            hover:pl-8
          "
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
          className="
            block px-6 py-4
            transition-all duration-300
            hover:bg-gray-800 hover:text-cyan-400
            hover:pl-8
          "
        >
          Contact
        </a>

      </div>
    </nav>
  );
}

export default Navbar;