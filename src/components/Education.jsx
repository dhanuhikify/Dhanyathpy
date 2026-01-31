import React from "react";

const Education = ({ darkMode }) => {
  const items = [
    {
      id: 1,
      degree: "B.E. Computer Science and Engineering",
      institution: "Sahyadri College of Engineering & Management, Mangalore, Karnataka",
      period: "2023 – 2027",
      note: "Pre-Final Year",
      imageSrc: "https://enrollacademy.com/wp-content/uploads/2020/03/A-view-of-the-Sahyadri-campus.jpg",
    },
    {
      id: 2,
      degree: "PU PCMB",
      institution: "St. Philomena Pre University College, Puttur",
      period: "2021 – 2023",
      note: "Pre-Final Year",
      imageSrc: "https://i.ytimg.com/vi/-j2Ss6SgQPU/maxresdefault.jpg",
    },
    {
      id: 3,
      degree: "High School",
      institution: "SDM English Medium School, Dharmasthala",
      period: "2018 – 2021",
      note: "Pre-Final Year",
      imageSrc: "https://tse2.mm.bing.net/th/id/OIP.e9X1md3UR6vdHQDCByzZqQHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      degree: "5th - 7th",
      institution: "Government Higher Primary School Nidle",
      period: "2015 – 2018",
      note: "Pre-Final Year",
      imageSrc: "https://images.tv9kannada.com/wp-content/uploads/2024/05/karnataka-education-department.jpg?w=1280",
    },
    {
      id: 5,
      degree: "1st - 5th",
      institution: "Government Higher Primary School Kokkada",
      period: "2011 – 2015",
      note: "Pre-Final Year",
      imageSrc: "https://images.tv9kannada.com/wp-content/uploads/2024/05/karnataka-education-department.jpg?w=1280",
    },
  ];

  const getInitials = (text) =>
    (text || "")
      .split(" ")
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 3)
      .join("")
      .toUpperCase();

  return (
    <div
      id="education"
      className={`w-full min-h-screen py-20 scroll-mt-24 ${darkMode ? "bg-gradient-to-b from-gray-800 to-black text-white" : "bg-white text-gray-800"}`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Education</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {items.map(({ id, degree, institution, period, note, imageSrc }) => (
            <div
              key={id}
              className={`rounded-lg p-6 ${darkMode ? "bg-gray-900 shadow-gray-700" : "bg-gray-100 shadow-gray-300"} shadow-md`}
            >
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-md overflow-hidden shadow-md flex items-center justify-center bg-gray-300">
                  {imageSrc ? (
                    <img src={imageSrc} alt={institution} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl font-bold text-gray-700">{getInitials(institution)}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{degree}</h3>
                  <p className="mt-2 text-lg">{institution}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">{period}</span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-600 text-white">{note}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
