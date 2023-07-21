import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Work from './Work';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import About from './About';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';
import 'aos/dist/aos.css';

import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/1" element={<Project1 />} />
          <Route path="/project/2" element={<Project2 />} />
          <Route path="/project/3" element={<Project3 />} />
          <Route path="/project/4" element={<Project4 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
