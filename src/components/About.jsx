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
          Final-year Computer Science student who enjoys building things end to end — from a clean UI down to the database. I work mainly in C, Java, SQL and JavaScript, and I've spent the last several months building web apps with the MERN stack and React.
        </p>
        <br />
        <p className="text-xl">
          I like figuring out how systems fit together, and most of what I know beyond the classroom has come from working on projects I actually cared about.
        </p>
        <p className="text-xl mt-20">
          I also have a strong interest in business and the stock market, which helps me think beyond coding and understand real-world problem-solving. Looking for a role where I can keep learning while contributing from day one.
        </p>
      </div>
    </div>
  );
};

export default About;
