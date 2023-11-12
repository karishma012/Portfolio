import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import starsBackground from './Components/stars3.avif'; // Import the background image

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${starsBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Adjust as needed for your layout
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
