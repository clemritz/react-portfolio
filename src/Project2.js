import React from "react";
import { Link } from "react-router-dom";

function Project2() {
  return (
    <div>
      <div className="whitespace"></div>
      <div className="container">
        <div className="hero-content">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="300"
              >
                Rafa card effect.
              </h1>
              <br />
              <br />
              <div className="row">
                <div className="col-lg-4">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="400"
                  >
                    Tech :
                  </p>
                  <h6
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="500"
                  >
                    HTML, CSS
                  </h6>
                </div>
                <div className="col-lg-4">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="600"
                  >
                    Link :
                  </p>
                  <h6
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="700"
                  >
                    <a
                      href="https://aquamarine-dieffenbachia-b3de4b.netlify.app/"
                      target="_blank"
                      id="project-link"
                      rel="noopener noreferrer"
                    >
                      rafa-card-effect
                    </a>
                  </h6>
                </div>
              </div>
              <br />
              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="800"
              >
                Rafael Nadal, often hailed as the "King of Clay," is a Spanish
                tennis sensation known for his remarkable athleticism and fierce
                competitive spirit on the court. With his left-handed playing
                style and powerful forehand, Nadal has secured numerous Grand
                Slam titles, making him one of the greatest tennis players of
                all time. Beyond his sporting achievements, he is admired for
                his humility and sportsmanship, earning him a devoted global
                fanbase.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-img">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-md-8">
              <a
                href="https://aquamarine-dieffenbachia-b3de4b.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="project image2"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="300"
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 prev d-flex" style={{ marginTop: "50px" }}>
              <Link to="/project/1" className="d-flex">
                <ion-icon className="arrow" name="arrow-back"></ion-icon>
                <p className="ms-2 pointer" style={{ marginTop: "-5px" }}>
                  previous
                </p>
              </Link>
            </div>
            <div
              className="col-lg-6 next d-flex justify-content-end"
              style={{ marginTop: "50px" }}
            >
              <Link to="/project/3" className="d-flex">
                <p className="me-2 pointer" style={{ marginTop: "-5px" }}>
                  next
                </p>
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
