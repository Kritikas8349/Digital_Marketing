
import React from "react";
import "./Home.css";

import BgShape from "../assets/home-bg.png";     // background shape image
import HeroRight from "../assets/hero-right.png"; // full right side single image

const Home = () => {
  return (
    <section className="home-section">
      <img src={BgShape} alt="" className="bg-shape" />

      <div className="home-container">
        {/* Left Side */}
        <div className="home-left">
          <h1>
            Empowering Your <br />
            <span>Digital Growth</span>
          </h1>

          <button className="home-btn">Get in touch</button>
        </div>

        {/* Right Side Full Single Image */}
        <div className="home-right">
          <img src={HeroRight} alt="Hero" className="hero-right-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;