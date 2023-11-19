import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import ninja from './Images/cnn.png';
import './About.css';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 sm:py-32 md:py-40 lg:py-60 relative">
      {/* Transparent box with white border, opacity, and border shadow */}
      <div className="bg-gray-300 bg-opacity-5 border-white border-2 rounded-lg p-10 mx-2 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-32 shadow-border">
        <div className="flex justify-center mb-8">
          {/* Social media icons */}
          <a href="https://www.linkedin.com/in/kk1210/" target="_blank" rel="noopener noreferrer" className="mx-6 transform hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="https://twitter.com/KhemnaniQ" target="_blank" rel="noopener noreferrer" className="mx-6 text-blue-400 transform hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a href="https://github.com/karishma012" target="_blank" rel="noopener noreferrer" className="mx-6 transform hover:scale-110 transition-transform">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </div>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.5 }}
          className="text-center text-white p-4 text-4xl font-bold"
        >
          Contact Me
        </motion.div>
        <div className="text-center">
          {/* Email icon and address */}
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-4 text-red-700 text-xl" />
            <a href="mailto:khemnanikarishma111@gmail.com" className="text-gray-400 lg:text-xl hover:underline hover:text-blue-600">
              khemnanikarishma111@gmail.com
            </a>
          </div>
        </div>

        <div className="text-center mt-4">
          {/* Email icon and address */}
          <div className="flex items-center justify-center text-orange-800 text-3xl font-semibold">
            <h1>Coding Profiles</h1>
          </div>
        </div>
        <div className="flex justify-center mt-6 mx-10 px-8">
          {/* Coding profiles icons */}
          <a href="https://auth.geeksforgeeks.org/user/khemnanikarishma111" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/480w/GeeksforGeeks.png" alt="GeeksforGeeks" className="h-8 w-8 mx-6 cursor-pointer transform hover:scale-150 transition-transform" />
          </a>
          <a href="https://www.codingninjas.com/studio/profile/Karishma12" target="_blank" rel="noopener noreferrer">
            <img src={ninja} alt="Coding Ninjas" className="h-10 w-10 mx-6 cursor-pointer transform hover:scale-150 transition-transform" />
          </a>
          <a href="https://www.hackerrank.com/profile/khemnanikarishm1" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" alt="HackerRank" className="h-8 w-8 mx-6 cursor-pointer transform hover:scale-150 transition-transform" />
          </a>
          <a href="https://leetcode.com/karishma-12/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" alt="LeetCode" className="h-8 w-8 mx-6 cursor-pointer transform hover:scale-150 transition-transform" />
          </a>
        </div>
        <p className='text-center text-gray-500 mt-16 text-xl'>Copyright ©2023 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;


