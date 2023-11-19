// ProjectsSection.js
import React from 'react';
import ProjectCard from './ProjectCard';
import yourPhoto from './Images/news.png';
import notehub from './Images/notebook.png';
import todo from './Images/todo.png';
import charge from './Images/charging.jpeg';
import board from './Images/dashboard.png';
import ui from './Images/mobileui.png';


const projects = [
  {
    image: yourPhoto,
    topic: 'NewsFlash',
    description: 'Created a user-friendly React-based frontend website utilizing News API and React Redux tools, offering a diverse range of daily news across various topics with original and sourced content and a robust social media presence.',
    githubLink: 'https://github.com/karishma012/newsapp', // Add your GitHub link here
  },
  {
    image: notehub,
    topic: 'NoteHub',
    description: 'Notehub provides a streamlined cloud-based platform for creating, editing, uploading, and securely managing personal notes, employing a cutting-edge MERN stack web application to revolutionize traditional note-taking processes.',
    githubLink: 'https://github.com/karishma012/myapp',
},
  {
    image: todo,
    topic: 'TaskPlanner',
    description: 'Developed an intuitive task manager website using ReactJS for the frontend, incorporating real-time data synchronization and secure user authentication via Firebase for an enhanced user experience.',
    githubLink: 'https://github.com/karishma012/Task-Planner',
  },
  {
    image: charge,
    topic: 'Dcharge',
    description: 'Created the frontend for an Electric Vehicle Co-Charging System, incorporating registration features and seamless integration with a Blockchain backend to facilitate electric vehicle charging through a slot booking system.',
    githubLink: 'https://github.com/rithikrajyt/DCharge',
  },
  {
    image: board,
    topic: 'Dashboard',
    description: 'Created React web application , featuring enhanced functionality through the incorporation of sorting, searching, and pagination capabilities. The application also integrates a chart library to visually represent data in accordance with the dataset content.',
    githubLink: 'https://github.com/karishma012/DashboardUI',
  },
  {
    image: ui,
    topic: 'MobileUI',
    description: 'The app enables users to navigate between product details and a cart. It features size selection and dynamic pricing on the Details page, while the My Cart page allows item removal. API integration connects the app to the backend.',
    githubLink: 'https://github.com/karishma012/MobileeUI',
  }
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <div className="text-center mb-8">
    <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
  );
};

export default ProjectsSection;
