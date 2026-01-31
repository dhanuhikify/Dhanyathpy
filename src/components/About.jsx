import React from "react";

const About = ({ darkMode }) => {
  return (
    <div
      id="about"
      className={`w-full min-h-screen py-20 scroll-mt-24 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-black text-white' : 'bg-white text-gray-800'}`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a Pre-Final Year Computer Science Engineering student from Sahyadri College of Engineering and Management, Mangalore, Karnataka. I am passionate about technology and enjoy building modern, responsive web applications.
        </p>
        <br />
        <p className="text-xl">
          I have experience working with the MERN stack (MongoDB, Express, React, Node.js) and am also proficient in PHP and Laravel. I am a quick learner who loves exploring new technologies and improving my development skills.
        </p>
        <p className="text-xl mt-20">
          I also have a strong interest in business and stocks, which helps me think beyond coding and understand real-world problem-solving. My goal is to build scalable, efficient, and impactful digital solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
