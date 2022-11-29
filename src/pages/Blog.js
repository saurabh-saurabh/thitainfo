import React from "react";

const Blog = () => (
  <main id="main">
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Blog</li>
        </ol>
        <h2>Blog</h2>
      </div>
    </section>

    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-8 entries">
            <article className="entry">
              <div className="entry-img">
                <img
                  src="assets/img/blog/blog-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">Science City Ahmedabad</a>
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
                  Gujarat Science City is a science education and entertainment
                  centre located in Ahmedabad, Gujarat, India. Opened in 2002,
                  it has an IMAX 3D theatre; exhibitions on science, space,
                  energy, life sciences, plants, nature and robotics; an
                  aquarium, an aviary and a butterfly park; as well as other
                  facilities.
                </p>
                <div className="read-more">
                  <a href="https://en.wikipedia.org/wiki/Gujarat_Science_City">
                    Read More
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <h3 className="sidebar-title">Search</h3>
              <div className="sidebar-item search-form">
                <form action="">
                  <input type="text" />
                  <button type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>

              <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li>
                    <a href="1">
                      General <span>(1)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-1.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Visited Science City Ahmedabad
                    </a>
                  </h4>
                  <time datetime="2020-01-01">Jan 1, 2019</time>
                </div>
              </div>

              <h3 className="sidebar-title">Tags</h3>
              <div className="sidebar-item tags">
                <ul>
                  <li>
                    <a href="1">App</a>
                  </li>
                  <li>
                    <a href="1">IT</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Blog;
