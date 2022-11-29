import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>

          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{ backgroundColor: "origin" }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated animate__fadeInDown">
                    Welcome to <span>Thita</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We craft beautiful website,digital product & services that
                    help you thrive in our digital world.We offer cost effective
                    web design with many solutions to help you sell online or
                    contact your target audience
                  </p>
                  <h5>
                    <h3> We specialize in:</h3> <br /> Web Design / Mobile
                    Application Developmen / ERP Application
                  </h5>
                  <a
                    href="1"
                    className="btn-get-started animate__animated animate__fadeInUp"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
