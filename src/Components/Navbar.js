// Navbar.js
import React, { useState } from 'react';
import logo from './Photo.jpeg'; // Replace with the actual path to your logo
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
        </div>

        <div className="hidden md:flex space-x-10">
          <Link to="About" spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-gray-400 hover:underline transition duration-300 cursor-pointer">ABOUT</Link>
          <Link to="Skills" spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-gray-400 hover:underline transition duration-300 cursor-pointer">SKILLS</Link>
          <Link to="Projects" spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-gray-400 hover:underline transition duration-300 cursor-pointer">PROJECTS</Link>
          <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-gray-400 hover:underline transition duration-300 cursor-pointer">CONTACT</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="About" spy={true} smooth={true} offset={50} duration={500} className="text-white block hover:text-gray-400 hover:underline transition duration-300 cursor-pointer">ABOUT</Link>
          <Link to="Skills" spy={true} smooth={true} offset={50} duration={500} className="text-white block hover:text-gray-400 hover:underline transition duration-300 cursor-pointer">SKILLS</Link>
          <Link to="Projects" spy={true} smooth={true} offset={50} duration={500} className="text-white block hover:text-gray-400 hover:underline transition duration-300 cursor-pointer">PROJECTS</Link>
          <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className="text-white block hover:text-gray-400 hover:underline transition duration-300 cursor-pointer">CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
