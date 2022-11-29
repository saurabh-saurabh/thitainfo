import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <Link to="/team">Team</Link>
                  {/* <a href="4">Terms of service</a> */}
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="6">Web Design</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="7">Web Development</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="8">Product Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="0">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="9">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Contact Via Instagram <br />
                Contact Via Youtube <br />
                <br />
                <strong>Phone:</strong> +91 81402 02047
                <br />
                <strong>Email:</strong> saurabhprajapati120@gmail.com
                <br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-info">
              <h3>About Thita Info</h3>
              <p>
                Thita info new launched software development company that
                provides easy and cost effective for your business to take it
                online.
              </p>
              <div class="social-links mt-3">
                <a
                  href="https://www.linkedin.com/in/saurabh-prajapati-08b41915b/"
                  class="twitter"
                >
                  <i class="bx bxl-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-prajapati-08b41915b/"
                  class="facebook"
                >
                  <i class="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-prajapati-08b41915b/"
                  class="instagram"
                >
                  <i class="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-prajapati-08b41915b/"
                  class="google-plus"
                >
                  <i class="bx bxl-skype"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-prajapati-08b41915b/"
                  class="linkedin"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          {year}-{year + 1} &copy; Copyright{" "}
          <strong>
            <span>Thita</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://saurabh-saurabh.github.io/saurabhprajapati"
          >
            Thita Info
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
