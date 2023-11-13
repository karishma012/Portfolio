import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';

function Skills() {
  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4"
    >
      <h1 className="text-4xl font-bold text-white mb-4 mt-0">SKILLS</h1>
      <p className="text-xl text-white mb-4">
        Here are some of my skills on which I have been working for the past 2 years.
      </p>

      <div className="flex flex-wrap justify-center">
        {/* FRONTEND SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardAnimation}
          whileHover="hover"
          className="max-w-md mx-auto flex flex-col items-center border border-purple-600 p-8 rounded-lg m-4"
        >
          <h3 className="text-2xl font-bold mb-4 text-white font-serif">FRONTEND</h3>
          <div className='flex flex-wrap justify-center'>
            <p className='max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'> <FontAwesomeIcon icon={faHtml5} className="mr-2 text-red-800 text-xl" />
              HTML</p>
            <p className='max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'> <FontAwesomeIcon icon={faBootstrap} className="mr-2 text-purple-800 text-xl" />
              BOOTSTRAP</p>
            <p className='max-w-md mx-auto text-white border border-white p-2 px-2 mx-2 mt-2 rounded-xl'> 
            <FontAwesomeIcon icon={faReact} className="mr-2 text-blue-400 text-xl" />
              REACTJS</p>
              <p className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-6 mx-2 rounded-xl'>
              <img src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png" alt="Node Icon" className=" h-4 mr-2" />
              TAILWINDCSS
            </p>
            <p className='max-w-md mx-auto text-white border border-white p-2 px-2 mx-2 mt-6  rounded-xl'><FontAwesomeIcon icon={faCss3} className="mr-2 text-blue-800 text-xl" />CSS</p>
          </div>
        </motion.div>

        {/* BACKEND SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardAnimation}
          whileHover="hover"
          className="max-w-md mx-auto flex flex-col items-center mx-3 border border-purple-600 p-8 rounded-lg m-4"
        >
          <h3 className="text-2xl font-bold mb-4 text-white font-serif">BACKEND</h3>
          <div className='flex flex-wrap justify-center'>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='max-w-md mx-auto flex text-white border border-white p-2 mt-2 mx-3 rounded-xl '
            >
              <img src="https://e7.pngegg.com/pngimages/343/191/png-clipart-database-computer-icons-microsoft-sql-server-database-miscellaneous-black.png" alt="Node Icon" className=" h-4 mr-2 " />
              SQL
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src="https://www.shareicon.net/data/2015/10/06/112723_development_512x512.png" alt="Node Icon" className=" h-4 mr-2" />
              NODEJS
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src="https://www.w3jar.com/wp-content/uploads/2019/05/express-js-tutorial.png" alt="Node Icon" className=" h-4 mr-2" />
              EXPRESSJS
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src=" https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="Node Icon" className=" h-6 mr-2" />
              MONGODB
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="Node Icon" className=" h-6 mr-2" />
              FIREBASE
            </motion.p>
          </div>
        </motion.div>

        {/* CODING SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardAnimation}
          whileHover="hover"
          className="max-w-md mx-auto flex flex-col items-center border border-purple-600 p-8 rounded-lg m-4"
        >
          <h3 className="text-2xl font-bold mb-4 text-white font-serif">CODING</h3>
          <div className='flex flex-wrap justify-center'>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png" alt="Node Icon" className=" h-6 mr-2" />
              C
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" alt="Node Icon" className=" h-6 mr-2" />
              C++
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src="https://cdn-icons-png.flaticon.com/256/226/226777.png" alt="Node Icon" className=" h-6 mr-2" />
              JAVA
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src="https://static.vecteezy.com/system/resources/previews/026/456/057/original/oop-icon-vector.jpg" alt="Node Icon" className=" h-6 mr-2" />
              OOPS
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              whileHover="hover"
              className='flex px-2 max-w-md mx-auto text-white border border-white p-2 mt-2 mx-2 rounded-xl'
            >
              <img src="https://www.learnsimpli.com/wp-content/uploads/2021/05/Data-structure-and-algorithms.png" alt="Node Icon" className=" h-6 mr-2 " />
              DSA
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
