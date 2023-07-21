import React from 'react';
import { Link } from'react-router-dom';

function Project3() {
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
                Wimbledon
              </h1>
              <br /><br />
              <div className="row">
                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">
                    most title holder :
                  </p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
                    Roger Federer
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="600">
                    surface :
                  </p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="700">
                    grass
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="800">
                    founded :
                  </p>
                  <h6 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="900">
                    1877
                  </h6>
                </div>
              </div>
              <br />
              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              >
                The Wimbledon Championships, commonly known simply as Wimbledon, is the oldest tennis tournament in the world and is widely regarded as the most prestigious. Wimbledon is the only major still played on grass, the traditional tennis playing surface.
              </p>
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
                className="project image3"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="300"
              ></div>
            </div>
            <div className="col-md-4">
              <div
                className="project image3"
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
            <div className="col-lg-6 prev d-flex" style={{ marginTop: '25px' }}>
              <Link to="/project/2" className='d-flex'>
                <ion-icon className="arrow" name="arrow-back"></ion-icon>
                <p className="ms-2 pointer" style={{ marginTop: '-5px' }}>previous</p>
              </Link>
            </div>
            <div className="col-lg-6 next d-flex justify-content-end" style={{ marginTop: '25px' }}>
              <Link to="/project/4" className='d-flex'>
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

export default Project3;
