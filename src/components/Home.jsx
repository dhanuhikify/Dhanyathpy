import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import HeroImage from '../IMG_20250201_102827.jpg';

const Home = ({ darkMode }) => {
  return (
    <div
      id="home"
      className={`h-screen w-full scroll-mt-24 ${darkMode ? 'bg-gradient-to-b from-black via-black to-gray-800' : 'bg-gradient-to-b from-white via-white to-blue-100'}`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl sm:text-7xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            I'm Tech & Stock Market Enthusiast
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, x: -100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-gray-500 py-4 max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            I am a Pre-Final Year Computer Science Engineering student at Sahyadri College of Engineering and Management, Mangalore, with a strong interest in technology, business, and stock market investing.
          </motion.p>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex gap-4"
          >
            <a
              href="#projects"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
            <a
              href="/resume.pdf"
              download={true}
              className={`group w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 cursor-pointer hover:scale-105 duration-300 ${darkMode ? 'text-white border-white hover:bg-white hover:text-black' : 'text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white'}`}
            >
              Resume
            </a>
          </motion.div>

          <div className="mt-6 flex justify-start md:justify-start gap-6">
            <a href="https://www.linkedin.com/in/dhanyath-p-y-973619296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className={`transition-colors ${darkMode ? 'hover:text-cyan-300 text-white' : 'hover:text-cyan-600 text-gray-800'}`}>
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/dhanuhikify" target="_blank" rel="noreferrer" className={`transition-colors ${darkMode ? 'hover:text-cyan-300 text-white' : 'hover:text-cyan-600 text-gray-800'}`}>
              <FaGithub size={28} />
            </a>
            <a href="https://wa.me/918197610552" target="_blank" rel="noreferrer" className={`transition-colors ${darkMode ? 'hover:text-green-400 text-white' : 'hover:text-green-600 text-gray-800'}`}>
              <FaWhatsapp size={28} />
            </a>
            <a href="https://www.instagram.com/_dhanyath_gowda_?igsh=aDhnOHVtNGdyMDUy" target="_blank" rel="noreferrer" className={`transition-colors ${darkMode ? 'hover:text-pink-400 text-white' : 'hover:text-pink-600 text-gray-800'}`}>
              <FaInstagram size={28} />
            </a>
            <a href="mailto:dhanyathpy@gmail.com" className={`transition-colors ${darkMode ? 'hover:text-cyan-300 text-white' : 'hover:text-cyan-600 text-gray-800'}`}>
              <FaEnvelope size={28} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className={`transition-colors ${darkMode ? 'hover:text-red-500 text-white' : 'hover:text-red-600 text-gray-800'}`}>
              <FaYoutube size={28} />
            </a>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="md:ml-10"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-gradient-to-tr from-cyan-500 to-blue-500 p-1 rounded-2xl shadow-2xl"
          >
            <img
              src={HeroImage}
              alt="profile"
              className="rounded-2xl w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
