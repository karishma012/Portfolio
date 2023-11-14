import React, { useState, useEffect } from 'react';
import yourPhoto from './hero.png';
import './About.css'; // Import the CSS file
import { motion, useAnimation } from 'framer-motion';

// About component
function About() {
  const [typedText, setTypedText] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    const textToType = "I am a Frontend Developer";
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(textToType.slice(0, index));
      controls.start({ opacity: 1, y: 0 }); // Animate the text as it types
      index++;

      if (index > textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [controls]);

  return (
    <div className="flex flex-col p-8 text-white items-center md:flex-row md:mt-16 bg-gray-950">
      <div className="md:max-w-xl md:ml-40">
        <h1 className='text-6xl font-bold text-gray-500'>Hi, I am  </h1>
        <p className='text-gray-600 text-6xl font-sans font-semibold animate-pulse'> Karishma Khemnani</p>
        
        <br />
        <h2 className='text-3xl font-sans font-bold '>
          <motion.span animate={controls} initial={{ opacity: 0, y: 20 }} className="text-pink-500">
            {typedText}
          </motion.span>
        </h2>
        <br />
        <p className='text-left text-xl md:text-2xl'>
          I'm a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>
        <br />
        <a
          href="https://drive.google.com/file/d/1lriSaBytCCNHlwcAqTITsLAzFSQNioHq/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <button
            type="button"
            className="text-xl text-white rounded-2xl bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium px-24 py-4 me-2 mb-2 md:px-32 lg:px-40 md:mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            My Resume
          </button>
        </a>
      </div>
      <div className="mt-4 md:mt-0 md:ml-40 image-container">
        <img src={yourPhoto} alt="Your Photo" className="rounded-full h-64 w-64 md:h-96 md:w-96 animated-image" />
      </div>
    </div>
  );
}

export default About;
