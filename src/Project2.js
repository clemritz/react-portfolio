import React from 'react';
import { Link } from 'react-router-dom';

function Project2() {
  return (
    <div>
      <div className="whitespace"></div>
      <div className="container">
        <div className="hero-content">
          <br /><br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300">Roland Garros</h1><br /><br />
              <div className="row">
                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">most title holder :</p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">Rafael Nadal</h6>
                </div>

                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="600">surface :</p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="700">clay</h6>
                </div>

                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="800">founded :</p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="900">1891</h6>
                </div>
              </div>
              <br />
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000">The French Open, also known as Roland-Garros, is a major tennis tournament held over two weeks at the Stade Roland Garros in Paris, France, beginning in late May each year. The tournament and venue are named after the French aviator Roland Garros. The French Open is the premier clay court championship in the world and the only Grand Slam tournament currently held on this surface.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-img">
        <div className="container">
          <br /><br />
          <div className="row">
            <div className="col-md-8">
              <div className="project image2" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300"></div>
            </div>
            <div className="col-md-4">
              <div className="project image2" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300"></div>
            </div>
          </div>
        </div>
      </div>

      <br /><br />

      <div className="project-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 prev d-flex">
              <Link to="/project/1" className='d-flex'>
                <ion-icon className="arrow" name="arrow-back"></ion-icon>
                <p className="ms-2 pointer" style={{ marginTop: '-5px' }}>previous</p>
              </Link>
            </div>
            <div className="col-lg-6 next d-flex justify-content-end">
              <Link to="/project/3" className='d-flex'>
                <p className="me-2 pointer" style={{ marginTop: '-5px' }}>next</p>
                <ion-icon className="arrow" name="arrow-forward"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
