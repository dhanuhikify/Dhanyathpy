import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <div className={`w-full py-8 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="flex justify-center gap-8 mb-4">
        <a href="https://www.linkedin.com/in/dhanyath-p-y-973619296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">
            <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/dhanuhikify" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">
            <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com/_dhanyath_gowda_?igsh=aDhnOHVtNGdyMDUy" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">
            <FaInstagram size={30} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
            <FaYoutube size={30} />
        </a>
        <a href="mailto:dhanyathpy@gmail.com" className="hover:text-cyan-300 transition-colors">
            <FaEnvelope size={30} />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Dhanu@ All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
