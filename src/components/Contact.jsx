import React from "react";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  return (
    <div
      id="contact"
      className={`w-full min-h-screen py-20 scroll-mt-24 ${darkMode ? 'bg-gradient-to-b from-black to-gray-800 text-white' : 'bg-white text-gray-800'} p-4`}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/your-form-id-here" 
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`p-2 bg-transparent border-2 rounded-md focus:outline-none ${darkMode ? 'text-white border-gray-500' : 'text-gray-800 border-gray-400'}`}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className={`my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none ${darkMode ? 'text-white border-gray-500' : 'text-gray-800 border-gray-400'}`}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`p-2 bg-transparent border-2 rounded-md focus:outline-none ${darkMode ? 'text-white border-gray-500' : 'text-gray-800 border-gray-400'}`}
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 gap-4">
             <div className="flex items-center gap-2">
                 <FaMapMarkerAlt size={20} className="text-red-500"/>
                 <span className="text-lg">Mangaluru, Karnataka, India</span>
             </div>
             <a 
                href="https://wa.me/918197610552" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
             >
                 <FaWhatsapp size={20} />
                 Chat on WhatsApp
             </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
