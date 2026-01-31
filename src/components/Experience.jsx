import React from 'react';

const Experience = ({ darkMode }) => {
    // Placeholder data - user can update this
    const experiences = [
        {
            id: 1,
            role: 'Full Stack Developer Intern',
            company: ' WSA',
            period: 'Sep 2025 - Nov 2025',
            description: 'Working on developing web applications using MERN stack.',
        },
        {
            id: 2,
            role: 'UI/UX Design Intern',
            company: 'Proxenix',
            period: 'Oct 2025 - Dec 2025',
            description: 'Designed intuitive, user-friendly interfaces and prototypes to improve user experience and visual appeal.',
        },
    ];

    return (
        <div id="experience" className={`w-full min-h-screen py-20 scroll-mt-24 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-black text-white' : 'bg-blue-100 text-gray-800'}`}>
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">My professional journey</p>
                </div>

                <div className="w-full flex flex-col gap-8">
                    {experiences.map(({ id, role, company, period, description }) => (
                        <div key={id} className={`p-6 rounded-lg shadow-md hover:scale-105 duration-300 ${darkMode ? 'bg-gray-900 shadow-gray-700' : 'bg-white shadow-gray-400'}`}>
                            <h3 className="text-2xl font-bold text-cyan-500">{role}</h3>
                            <h4 className="text-xl font-semibold">{company}</h4>
                            <p className="text-gray-500 italic mb-4">{period}</p>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
