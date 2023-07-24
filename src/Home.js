import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import './project.css';

function Homepage() {
  return (
    <div>
      <div className="hero">
        <div className="header">
          <h1 className="line anim-typewriter">I am a front end developer.</h1>
        </div>
      </div>
      <div className="scroll-down"></div>
      <div className="container-fluid">
        <br /><br /><br />

        <h6>Selected projects</h6>

        <div className="vertical"></div>
        <br />

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <Link to="/project/1">
          <div className="row">
            <div className="col-lg-8"></div>
            <div className="col-lg-4 project project1" data-aos="fade-up" data-aos-duration="3000"></div>
          </div>
        </Link>

        <div className="whitespace"></div>

        <Link to="/project/2">
          <div className="row">
            <div className="col-lg-6 project project2" data-aos="fade-up" data-aos-duration="3000"></div>
            <div className="col-lg-6"></div>
          </div>
        </Link>

        <div className="whitespace"></div>

        <Link to="/project/3">
          <div className="row">
            <div className="col-lg-7"></div>
            <div className="col-lg-4 project project3" data-aos="fade-up" data-aos-duration="3000"></div>
            <div className="col-lg-1"></div>
          </div>
        </Link>

        <div className="whitespace"></div>

        <Link to="/project/4">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 project project4" data-aos="fade-up" data-aos-duration="3000"></div>
            <div className="col-lg-6"></div>
          </div>
        </Link>

        <div className="whitespace"></div>
      </div>
    </div>
  );
}

export default Homepage;
