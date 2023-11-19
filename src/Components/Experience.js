import React from 'react';
import yourPhoto from './Images/hireme.png';
import './About.css';

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl p-4 font-bold mb-6 text-white animate-pulse">Experience</h1>
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-5/6 xl:w-4/5 max-w-5xl shadow-md rounded-md overflow-hidden bg-black border border-purple-700 border-bold shadow-border">
        {/* Image */}
        <img
          className="w-full h-40 object-cover border border-purple-600 border-bold rounded-t-md p-2"
          src={yourPhoto}
          alt="Experience Image"
        />

        {/* Card Content */}
        <div className="p-6">
          {/* Position */}
          <h2 className="text-xl font-bold mb-2 text-white">Frontend Development Intern</h2>

          {/* Company Name with Website */}
          <div className="mb-2">
            <p className="text-gray-400">HiremeClub</p>
            <p className="text-blue-500">
              <a href="https://www.hiremeclub.com/" target="_blank" rel="noopener noreferrer">
                https://www.hiremeclub.com/
              </a>
            </p>
          </div>

          {/* Date */}
          <p className="text-gray-500 mb-4">16 Aug 2023 - 17 Oct 2023</p>

          {/* Description */}
          <h1 className='text-gray-400 font-bold font-sans underline'>About Company</h1>
          <p className='text-green-500'> AI-powered hiring solution which makes recruitment process for employess easier and  helps to discover top talent effortlessly.</p>
          <br />
          <p></p>
          <p className="text-white">{`
           The UI for HiremeClub's testing platform was developed in collaboration with the Engineering team, encompassing the design and construction of Frontend pages for the Dashboard. The development process involved the creation of Frontend pages from scratch, utilizing ReactJS and TailwindCSS to guarantee a responsive website Frontend.





          `}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
