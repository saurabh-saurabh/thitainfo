import React from "react";

import ServicesSection from "../components/services/ServicesSection";

const Services = () => (
  <main id="main">
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Services</li>
        </ol>
        <h2>Services</h2>
      </div>
    </section>

    <ServicesSection />

    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Our Skills</h2>
          <p>Blow chart represent our mastery</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/skills-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Based on our last project</h3>
            <div className="skills-content">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="90"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="90"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="75"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Photoshop <i className="val">55%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="85"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
