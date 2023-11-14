import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import ProjectsSection from './Components/ProjectsSection';
import Footer from './Components/Footer';
import { Element } from "react-scroll";



function App() {
  

  return (
    <div className='bg-gray-950'>
      <Navbar />
      <Element name="About" className="section">
      <About/>
      </Element>
     
      <Element name="Skills" className="section">
      <Skills/>
      </Element>

      
      <Element name="Projects" className="section">
      <ProjectsSection/>
      </Element>

      
      <Element name="Contact" className="section">
      <Footer/>
      </Element>
      
      
    </div>
  );
}

export default App;
