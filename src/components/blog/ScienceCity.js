import React from "react";

const ScienceCity = () => {
  return (
    <article id="sciencecity" className="entry">
      <div className="entry-img">
        <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
      </div>

      <h2 className="entry-title">
        <a href="#blog-single.html">Science City Ahmedabad</a>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center">
            <i className="bi bi-person"></i>{" "}
            <a href="blog-single.html">Saurabh Prajapati</a>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-clock"></i>{" "}
            <a href="blog-single.html">
              <time datetime="2020-01-01">Jan 1, 2020</time>
            </a>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-chat-dots"></i>{" "}
            <a href="https://goo.gl/maps/AGNx1qK3wv8ebbgSA">Location</a>
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p>
          Gujarat Science City is a science education and entertainment centre
          located in Ahmedabad, Gujarat, India. Opened in 2002, it has an IMAX
          3D theatre; exhibitions on science, space, energy, life sciences,
          plants, nature and robotics; an aquarium, an aviary and a butterfly
          park; as well as other facilities.
        </p>
        <div className="read-more">
          <a href="https://en.wikipedia.org/wiki/Gujarat_Science_City">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default ScienceCity;
