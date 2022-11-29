import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResumeTeamplate from "../components/resume/ResumeTemplate";

const Portfolio = () => {
  const resumeTem = [
    { id: 1, name: "templete1" },
    { id: 2, name: "templete2" },
    { id: 3, name: "templete3" },
    { id: 4, name: "templete4" },
    { id: 5, name: "templete5" },
    { id: 6, name: "templete6" },
    { id: 7, name: "templete7" },
    { id: 8, name: "templete8" },
    { id: 9, name: "templete9" },
  ];

  const [num] = useState(resumeTem);
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/portfolio">resume</Link>
            </li>
          </ol>
          <h2>Make Your Resume</h2>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row portfolio-container">
            {num.map((obj) => (
              <ResumeTeamplate obj={obj} />
            ))}
          </div>
        </div>
      </section>

      {/* Add Client Section if you want to add */}
    </main>
  );
};

export default Portfolio;
