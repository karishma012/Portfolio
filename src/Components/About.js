import React from 'react';
import yourPhoto from './astronaut.avif';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="flex flex-col p-8 text-white items-center md:flex-row md:mt-16">
      <div className="md:max-w-xl md:ml-40">
        <h1 className='text-6xl font-bold'>Hi, I am Karishma </h1>
        <br />
        <h2 className='text-3xl font-sans font-bold'>I am a Frontend Developer</h2>
        <br />
        <p className='text-left text-xl md:text-2xl'>
          I'm a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>
        <br />
        <button type="button" className="text-white rounded-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-24 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
      </div>
      <div className="mt-4 md:mt-0 md:ml-80 image-container">
        <img src={yourPhoto} alt="Your Photo" className="rounded-full h-64 w-64 md:h-96 md:w-96 animated-image" />
      </div>
    </div>
  );
}

export default About;
