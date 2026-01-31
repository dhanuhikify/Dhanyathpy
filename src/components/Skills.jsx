import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaBootstrap, FaJava, FaPython, FaDatabase, FaFigma } from "react-icons/fa";
import { SiMongodb, SiLaravel, SiTailwindcss } from "react-icons/si";

const Skills = ({ darkMode }) => {
  const techs = [
    {
      id: 1,
      src: <FaHtml5 size={50} className="text-orange-500" />,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: <FaCss3Alt size={50} className="text-blue-500" />,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: <FaJs size={50} className="text-yellow-500" />,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: <FaReact size={50} className="text-cyan-400" />,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: <SiTailwindcss size={50} className="text-sky-400" />,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: <FaNodeJs size={50} className="text-green-500" />,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: <SiMongodb size={50} className="text-green-600" />,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: <FaBootstrap size={50} className="text-purple-600" />,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 9,
      src: <FaPhp size={50} className="text-indigo-600" />,
      title: "PHP",
      style: "shadow-indigo-600",
    },
    {
      id: 10,
      src: <SiLaravel size={50} className="text-red-600" />,
      title: "Laravel",
      style: "shadow-red-600",
    },
    {
      id: 11,
      src: <FaJava size={50} className="text-orange-600" />,
      title: "Java",
      style: "shadow-orange-600",
    },
    {
      id: 12,
      src: <FaPython size={50} className="text-yellow-400" />,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 13,
      src: <span className="text-5xl font-bold text-blue-600">C</span>,
      title: "C",
      style: "shadow-blue-600",
    },
    {
      id: 14,
      src: <FaDatabase size={50} className="text-gray-400" />,
      title: "SQL",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src: <FaFigma size={50} className="text-pink-500" />,
      title: "UI/UX Design",
      style: "shadow-pink-500",
    },
  ];

  return (
    <div
      id="skills"
      className={`w-full min-h-screen py-20 scroll-mt-24 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-black text-white' : 'bg-blue-100 text-gray-800'}`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
            >
              <div className="w-20 mx-auto py-4">
                {src}
              </div>
              <p className="mt-4 font-bold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
