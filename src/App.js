import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Work from './Work';
import About from './About';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';
import 'aos/dist/aos.css'; // Import the AOS reveal animation
import AOS from 'aos'; // Import AOS here

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS inside useEffect hook
  }, []); // Run this only once after the component is mounted

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
