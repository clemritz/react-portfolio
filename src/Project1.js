import React from 'react';
import { Link } from 'react-router-dom';

function Project1() {
  return (
    <div>
      <div className='whitespace'></div>
      <div className="container">
        <div className="hero-content">
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1>Australian Open</h1>
              <br /><br />
              <div className="row">
                <div className="col-lg-4">
                  <p>most title holder :</p>
                  <h6>Novak Djokovic</h6>
                </div>

                <div className="col-lg-4">
                  <p>surface :</p>
                  <h6>hard</h6>
                </div>

                <div className="col-lg-4">
                  <p>founded :</p>
                  <h6>1905</h6>
                </div>
              </div>
              <br />
              <p>
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
      <div class="project-nav">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 next d-flex justify-content-end mt-5">
              <p class="me-2 pointer" onclick="location.href='project2.html'">next</p>
              <ion-icon class="arrow" name="arrow-forward"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
