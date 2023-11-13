import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ image, topic, description, githubLink }) => {
  const cardAnimation = {
    hover: {
      scale: 1.05, // Increase scale on hover
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      whileHover="hover"
      variants={cardAnimation}
      className="max-w-sm rounded overflow-hidden border border-purple-600 shadow-2xl bg-gray-950 p-4"
    >
      <img src={image} alt={topic} className="w-full h-48 object-cover border-2 border-purple-600 border-bold rounded-lg" />
      <div className="px-6 py-4 text-white">
        <div className="font-bold text-xl mb-2">{topic}</div>
        <p className="text-base">{description}</p>

        {githubLink && (
          <div className="mt-4 flex items-center">
            <FaGithub className="text-gray-600 mr-2 text-xl" />
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Link
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
