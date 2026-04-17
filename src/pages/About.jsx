// About.jsx
import React from "react";
import "./About.css";

import aboutTopBlob from "../assets/about-top-blob.png";
import aboutRightIllustration from "../assets/about-right-illustration.png";
import aboutBottomWave from "../assets/about-bottom-wave.png";
// import aboutMobileLayout from "../assets/about-mobile-layout.png";

import visionImg from "../assets/vision-team.png";
import missionImg from "../assets/mission-growth.png";
import bottomWave from "../assets/wave_about.png";

const About = () => {
    return (

        <>

            {/*----------------------------------------------------- Top------------------------------------- */}
            <section className="about-section" id="about">
                {/* Desktop / Tablet Decorative Top Shape */}
                <img
                    src={aboutTopBlob}
                    alt="decorative shape"
                    className="about-top-blob"
                />

                <div className="about-container">
                    {/* LEFT CONTENT */}
                    <div className="about-content">
                        <h2>Inside <br /> <span>The Soul Solution</span></h2>

                        <p>
                            At The Soul Solution, we don’t just market brands we give them a
                            voice, a personality, and a purpose.
                        </p>

                        <p>
                            We are a creative digital marketing agency driven by strategy,
                            design, and emotion. Our approach blends data with storytelling to
                            build meaningful connections between brands and their audiences.
                        </p>

                        <p>
                            Because in today’s world, people don’t just buy products they
                            connect with brands that feel real.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="about-image-box">
                        <img
                            src={aboutRightIllustration}
                            alt="digital marketing illustration"
                            className="about-right-image"
                        />
                    </div>
                </div>

                {/* Bottom Wave Desktop */}
                <img
                    src={aboutBottomWave}
                    alt="wave shape"
                    className="about-bottom-wave"
                />

                {/* Mobile Full Layout Image */}
                {/* <img
                // src={aboutMobileLayout}
                alt="about mobile design"
                className="about-mobile-image"
            /> */}
            </section>

            {/*---------------------------------------------- Who we are --------------------------------------*/}

            <section className="wwa-section">

                <div className="wwa-container">

                    {/* TOP CONTENT */}
                    <div className="wwa-top">
                        <h2 className="wwa-heading">Who We Are</h2>

                        <p className="wwa-text">
                            We are a team of thinkers, creators, and problem-solvers who believe
                            that every brand has a soul it just needs the right direction to
                            shine. From startups to growing businesses, we help brands discover
                            their identity and transform it into powerful digital experiences.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="wwa-grid">

                        {/* CARD 1 */}
                        <div className="wwa-card">
                            <h3>Our Vision</h3>

                            <img src={visionImg} alt="our vision" />

                            <p>
                                To become a trusted creative partner for brands that want more
                                than just marketing they want meaning, identity, and impact.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="wwa-card">
                            <h3>Our Mission</h3>

                            <img src={missionImg} alt="our mission" />

                            <p>
                                To help brands grow with purpose, connect authentically, and stand
                                out in a crowded digital world.
                            </p>
                        </div>

                    </div>
                </div>

                {/* BOTTOM CTA */}
                <div className="wwa-bottom-area">
                    <img src={bottomWave} alt="wave design" className="wwa-wave" />

                    {/* <h4>Let's build something meaningful together</h4> */}
                </div>

            </section>


        </>
    );
};

export default About;