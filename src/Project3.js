import React from "react";
import { Link } from "react-router-dom";

function Project3() {
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
                Messenger
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
                    Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth,
                    Pusher
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
                      href="https://messenger-clone-eight-chi.vercel.app/"
                      target="_blank"
                      id="project-link"
                      rel="noopener noreferrer"
                    >
                      messenger-clone-app
                    </a>
                  </h6>
                </div>
              </div>
              <br />
              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              >
                Messenger is a messaging app developed by Facebook, allowing
                users to send text, images, and videos to contacts individually
                or in groups.{" "}
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
                href="https://messenger-clone-eight-chi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="project image3"
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
              <Link to="/project/2" className="d-flex">
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
              <Link to="/project/4" className="d-flex">
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

export default Project3;
