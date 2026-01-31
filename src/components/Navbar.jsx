import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'education' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'projects' },
    { id: 6, link: 'experience' },
    { id: 7, link: 'contact' },
  ];

  const handleClick = () => setNav(!nav);

  return (
    <nav className={`flex justify-between items-center w-full h-20 px-4 text-white fixed z-50 ${darkMode ? 'bg-gray-900' : 'bg-blue-600'} transition-colors duration-300`}>
      <div>
        <h1 className="text-5xl font-signature ml-2 font-bold cursor-pointer hover:scale-105 duration-200">Dhany</h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200 hover:text-white"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
        <li className="px-4 cursor-pointer hover:scale-110 duration-200 text-yellow-300" onClick={toggleDarkMode}>
            {darkMode ? <FaSun size={25} /> : <FaMoon size={25} className="text-gray-200" />}
        </li>
      </ul>

      <div onClick={handleClick} className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ${darkMode ? 'bg-gradient-to-b from-black to-gray-800' : 'bg-gradient-to-b from-blue-600 to-blue-400'} text-gray-200`}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <a onClick={() => setNav(!nav)} href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
           <li className="px-4 cursor-pointer py-6" onClick={() => {toggleDarkMode(); setNav(!nav);}}>
            {darkMode ? <FaSun size={30} className="text-yellow-300" /> : <FaMoon size={30} />}
        </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
