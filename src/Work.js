import React from 'react';
import './work-page.css'

function HeroContent() {
  return (
    <div>
      <div className="whitespace"></div>
      <div className="container">
        <div className="hero-content">
          <br /><br />
          <div className="row">
            <div className="col-lg-8">
              <h3 data-aos="fade-up" data-aos-duration="2500" data-aos-delay="300">work.</h3> <br />
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">Freshly out of Le Wagon, I am currently engaged in the development of a project that I am eager to present. As a recent graduate from a web development bootcamp, my focus has been on honing my skills and gaining hands-on experience in various web technologies. While I may not have an extensive portfolio to showcase at this early stage of my career, I am excited to demonstrate the knowledge and expertise I have acquired during my bootcamp.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-8"></div>

          <div className="col-lg-4 project project1" data-aos="fade-left" data-aos-duration="3000" onClick={() => window.location.href='project1.html'}></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-6 project project2" data-aos="fade-right" data-aos-duration="3000" onClick={() => window.location.href='project2.html'}></div>

          <div className="col-lg-6"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-7"></div>

          <div className="col-lg-4 project project3" data-aos="fade-left" data-aos-duration="3000" onClick={() => window.location.href='project3.html'}></div>

          <div className="col-lg-1"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-1"></div>

          <div className="col-lg-5 project project4" data-aos="fade-right" data-aos-duration="3000" onClick={() => window.location.href='project4.html'}></div>

          <div className="col-lg-6"></div>
        </div>

        <div className="whitespace"></div>
      </div>
    </div>
  );
}

export default HeroContent;
