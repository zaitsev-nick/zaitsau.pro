import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/slider/SliderTwo";
import About from "../components/about/AboutTwo";
import Portfolio from "../components/portfolio/PortfolioTwo";
import Skills from "../components/skills/SkillsTwo";
import Video from "../components/video/VideoTwo";
import Brand from "../components/BrandAnimation";
import Testimonial from "../components/testimonial/TestimonialTwo";
import News from "../components/news/NewsTwo";
import CallToAction from "../components/calltoactions/CallToActionTwo";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="home-two">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Skills />
      {/* End Skills Section */}
{/* 
      <div className="shane_tm_section">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div>
      End shane_tm_partners */}
{/* 
      <div className="shane_tm_section">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <span>Testimonials</span>
                  <h3>What clients say about my portfolio template</h3>
                </div>
              </div>

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </div>
      End  shane_tm_testimonials*/}

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};
