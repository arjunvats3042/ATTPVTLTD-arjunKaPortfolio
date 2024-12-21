import React, {useState} from "react";
import {Link} from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-black z-50 px-4 py-2 select-none">
      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white p-2 focus:outline-none"
        >
          <svg
            className={`w-8 h-8 transform transition-all duration-300 ${
              menuOpen ? "rotate-45" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
              className={`${menuOpen ? "opacity-0" : ""}`} // Hides the first line when opened
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
              className={`${menuOpen ? "block" : "hidden"}`} // Shows the X icon when open
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`lg:flex flex-col lg:flex-row justify-center lg:gap-6 items-center transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-white relative group hover:bg-slate-800 p-4 rounded-lg transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="achievements"
          smooth={true}
          duration={500}
          className="text-white relative group hover:bg-slate-800 p-4 rounded-lg transition-all duration-300"
        >
          Achievements
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-white relative group hover:bg-slate-800 p-4 rounded-lg transition-all duration-300"
        >
          About me
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-white relative group hover:bg-slate-800 p-4 rounded-lg transition-all duration-300"
        >
          Projects
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-white relative group hover:bg-slate-800 p-4 rounded-lg transition-all duration-300"
        >
          Skills
        </Link>

        <a
          href="https://drive.google.com/file/d/15gUmynxIdxKBRIAWgwplVr_i9IjFQt5o/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white relative group hover:bg-slate-800 p-4 rounded-lg transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
