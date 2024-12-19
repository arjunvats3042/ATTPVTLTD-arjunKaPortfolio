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
            className="w-8 h-8"
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
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`lg:flex flex-col lg:flex-row justify-center lg:gap-6 items-center transition-all duration-500 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <a
          href="#"
          className="text-white relative group hover:bg-slate-800 p-4 rounded-lg transition-all duration-300"
        >
          Home
        </a>
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
        <Link
          to="achievements"
          smooth={true}
          duration={500}
          className="text-white relative group hover:bg-slate-800 p-4 rounded-lg transition-all duration-300"
        >
          Achievements
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
