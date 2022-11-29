import React from "react";
import { Link } from "react-router-dom";

const ResumeTeamplate = ({ obj }) => {
  const resumeURL = `/portfolio/${obj.name}`;
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <Link to={resumeURL}>
        <div className="portfolio-wrap">
          <img
            src="assets/img/portfolio/portfolio-1.jpg"
            className="img-fluid"
            alt=""
          />
          <div className="portfolio-info">
            <h4>{obj.id}</h4>
            <p>{obj.name}</p>
            <div className="portfolio-links">
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResumeTeamplate;
