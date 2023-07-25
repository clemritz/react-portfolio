import React from 'react';
import { Link } from'react-router-dom';

function Project4() {
  return (
    <div>
      <div className="whitespace"></div>
      <div className="container">
        <div className="hero-content">
          <br /><br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300">
                US Open
              </h1>
              <br /><br />
              <div className="row">
                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">
                    most title holder :
                  </p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
                    Jimmy Connors, Pete Sampras, Roger Federer
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="600">
                    surface :
                  </p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="700">
                    hard
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="800">
                    founded :
                  </p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="900">
                    1881
                  </h6>
                </div>
              </div>
              <br />
              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              >
                The US Open Tennis Championships, commonly called the US Open, is a hardcourt tennis tournament held annually in Queens, New York. Since 1987, the US Open has been chronologically the fourth and final Grand Slam tournament of the year.              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-img">
        <div className="container">
          <br /><br />
          <div className="row">
            <div className="col-md-8">
              <div
                className="project image4"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="300"
              ></div>
            </div>
            <div className="col-md-4">
              <div
                className="project image4"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="300"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 prev d-flex" style={{ marginTop: '50px' }}>
              <Link to="/project/3" className='d-flex'>
                <ion-icon className="arrow" name="arrow-back"></ion-icon>
                <p className="ms-2 pointer" style={{ marginTop: '-5px' }}>previous</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project4;
