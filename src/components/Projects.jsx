import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "BookMyShow Clone",
      description: "A clone of the popular movie ticket booking platform BookMyShow. Built with MERN stack.",
      demoLink: "#",
      codeLink: "https://github.com/dhanuhikify/BOOKMY-SHOW.git",
      src: "https://inc42.com/wp-content/uploads/2019/07/bookmyshow-feature.jpg"
    },
    {
      id: 2,
      title: "Ideal Café App",
      description: "A web application for a café to manage orders and menu. Features a user-friendly interface.",
      demoLink: "#",
      codeLink: "https://github.com/dhanuhikify/Ieal-Cafe.git",
      src: "https://aroundmangalore.com/wp-content/uploads/2014/03/ideal_cafe_mangalore.jpg"
    },
    {
      id: 3,
      title: "Medical Shop Management",
      description: "System to manage inventory, sales, and billing for a medical shop. Efficient and secure.",
      demoLink: "#",
      codeLink: "https://github.com/dhanuhikify/Medical-shop.git",
      src: "https://i.pinimg.com/originals/02/2e/96/022e9691c5ba65d23cbf27a53f83163e.jpg"
    },
    {
      id: 4,
      title: "Sainik Sahayak",
      description: "Military Welfare Management System designed to assist soldiers and their families.",
      demoLink: "#",
      codeLink: "https://github.com/dhanuhikify/SAINIK-SAHAYAK-ss-24Hacthn-.git",
      src: "https://indiandefencetimes.in/wp-content/uploads/2024/06/IMG_4155.jpeg"
    },
    {
      id: 5,
      title: "Smart Sustainable Travel AI",
      description: "AI-powered project promoting sustainable travel choices and eco-friendly routes.",
      demoLink: "#",
      codeLink: "https://github.com/dhanuhikify/TripplanningusingAI-Minprjo.git",
      src: "https://econsultancy.imgix.net/content/uploads/2023/05/26132458/shutterstock_1832071024.jpg"
    },
    {
      id: 6,
      title: "Lab Equipment Manager",
      description: "Developed a Lab Equipment Management System to track, manage, and maintain laboratory equipment efficiently.",
      demoLink: "#",
      codeLink: "https://github.com/dhanuhikify/labmanagement-minprojdbms.git",
      src: "https://thumbs.dreamstime.com/z/laboratory-equipment-lots-glass-filled-research-development-scientific-glassware-chemical-experiment-136831705.jpg"
    },
    {
      id: 7,
      title: "Eco Charge",
      description: "Solar powered EV vehicle charging station project focusing on sustainable energy solutions.",
      demoLink: "#",
      codeLink: "#",
      src: "https://tse1.mm.bing.net/th/id/OIP.ch4wcJYtxFkKXVwlOdLN0wHaFj?pid=Api&P=0&h=180"
    },
  ];

  return (
    <div
      id="projects"
      className={`w-full min-h-screen py-20 scroll-mt-24 ${darkMode ? 'bg-gradient-to-b from-black to-gray-800 text-white' : 'bg-white text-gray-800'}`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, src, demoLink, codeLink }) => (
            <div key={id} className={`shadow-md rounded-lg duration-200 hover:scale-105 ${darkMode ? 'shadow-gray-600 bg-gray-900' : 'shadow-gray-400 bg-gray-100'} p-4 flex flex-col items-center`}>
              <div className="w-full flex justify-center mb-4">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105 w-48 h-48 object-cover shadow-lg"
                />
              </div>
              <div className="w-full">
                  <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
                  <p className="text-sm text-gray-500 mb-4 h-20 overflow-hidden text-center">{description}</p>
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-105 font-bold text-lg flex items-center justify-center gap-2">
                        <a href={demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">Demo <FaExternalLinkAlt size={15}/></a>
                    </button>
                    <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-105 font-bold text-lg flex items-center justify-center gap-2">
                        <a href={codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">Code <FaGithub size={15}/></a>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
