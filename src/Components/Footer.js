// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion, useAnimation } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 1.5 }}
        className="text-center text-gray-700 p-8 text-3xl font-bold animate-pulse"
      >
        Contact Me
      </motion.div>
      <div className="flex justify-center mb-8">
        {/* Social media icons */}
        <a href="https://www.linkedin.com/in/kk1210/" target="_blank" rel="noopener noreferrer" className="mx-6 text-blue-800 transform hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/k.pvt01210/" target="_blank" rel="noopener noreferrer" className="mx-6 bg-pink-900 transform hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com/KhemnaniQ" target="_blank" rel="noopener noreferrer" className="mx-6 text-blue-500 transform hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/karishma012" target="_blank" rel="noopener noreferrer" className="mx-6 transform hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>

      <div className="text-center mt-10">
        {/* Email icon and address */}
        <div className="flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-4 text-red-700" />
          <span className='text-gray-500'>khemnanikarishma111@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
