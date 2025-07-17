import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-4">
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-lg font-medium">
        <li><Link to="/" className="hover:text-pink-400 transition">Home</Link></li>
        <li><Link to="/skills" className="hover:text-pink-400 transition">Skills</Link></li>
        <li><Link to="/projects" className="hover:text-pink-400 transition">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-pink-400 transition">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;