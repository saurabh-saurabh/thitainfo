import React from "react";
import {
  TWITTER_URL,
  FACEBOOK_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
} from "../../constrains/Constant";

const TopBar = () => (
  <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center">
          <a href="mailto:saurabhprajapati@gmail.com">
            saurabhprajapati120.@gmail.com
          </a>
        </i>
        <i className="bi bi-phone d-flex align-items-center ms-4">
          <span>+91 81402 42047</span>
        </i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href={TWITTER_URL} className="twitter">
          <i className="bi bi-twitter"></i>
        </a>
        <a href={FACEBOOK_URL} className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href={INSTAGRAM_URL} className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href={LINKEDIN_URL} className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  </section>
);

export default TopBar;
