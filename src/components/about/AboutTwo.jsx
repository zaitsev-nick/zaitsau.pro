import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />

                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/about/Avatar.jpeg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Front-End Developer</h3>
                  <h5>Minsk, Belarus</h5>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                  I'm a developer with 10+ years of experience in software application development.
                  </p>
                  <p>
                  I have perfect understanding of all stages of software development process.
                  </p>
                  <p>
                  Skilled in UI/UX design/front-end architecture and translating customer needs into software solutions.
                  </p>
                  <p>
                  Hands-on experience in web performance optimization, mobile first and progressive enhancement concepts.
                  </p>
                  <p>
                  Experienced in full-stack development.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/Resume_Mikalai_Zaitsau.pdf" download>
                    Download my resume
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
