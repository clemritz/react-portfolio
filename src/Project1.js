import React from 'react';
import { Link } from 'react-router-dom';

function Project1() {
  return (
    <div>
      <div className='whitespace'></div>
      <div className="container">
        <div className="hero-content">
          <br /><br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300">Australian Open</h1>
              <br /><br />
              <div className="row">
                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">most title holder :</p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">Novak Djokovic</h6>
                </div>

                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="600">surface :</p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="700">hard</h6>
                </div>

                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="800">founded :</p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="900">1905</h6>
                </div>
              </div>
              <br />
              <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000">
                The Australian Open is a tennis tournament held annually at Melbourne Park in Melbourne, Victoria, Australia. The tournament is the first of the four Grand Slam tennis events held each year, preceding the French Open, Wimbledon, and the US Open.
              </p>
            </div>
          </div>
        </div>
        <div className="project-img">
          <div className="container">
            <br></br>
            <div className="row">
              <div className="col-md-8">
                <div className="project image1" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300"></div>
              </div>
              <div className="col-md-4">
                <div className="project image1" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="project-nav">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 next d-flex justify-content-end" style={{ marginTop: '30px' }}>
          <Link to="/project/2" class='d-flex'>
              <p class="me-2 pointer">next</p>
              <ion-icon class="arrow" name="arrow-forward"></ion-icon>
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
