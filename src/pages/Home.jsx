
import React from "react";
import "./Home.css";

import BgShape from "../assets/home-bg.png";     // background shape image
import HeroRight from "../assets/hero-right.png"; // full right side single image

// import AboutBg from "../assets/about-bg.png";     // background image
import Girl1 from "../assets/about-girl-1.png";   // left top icon
import Phone from "../assets/about-phone.png";    // right center icon
import Girl2 from "../assets/about-girl-2.png";   // left bottom icon\

import CenterGirl from "../assets/service-center.png";
import LeftGirl from "../assets/service-left.png";
import RightGirl from "../assets/service-right.png";

import BulbImg from "../assets/bulb.png";

const Home = () => {
    return (
        <>
            {/* ---------------------------------Top------------------------------------- */}

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

            {/* ---------------------------------About------------------------------------ */}

            <section className="about-section">
                {/* <img src={AboutBg} alt="" className="about-bg" /> */}

                <div className="about-container">

                    {/* Heading */}
                    <div className="about-heading">
                        ABOUT THE SOUL SOLUTION
                    </div>

                    {/* Desktop Layout */}
                    <div className="about-grid">

                        {/* Row 1 */}
                        <div className="about-card image-box left-img">
                            <img src={Girl1} alt="Girl Icon" />
                        </div>

                        <div className="about-card text-box">
                            <h2>Creators of Digital Excellence</h2>
                            <p>
                                At SoulSolution, we blend creativity with strategy
                                to craft impactful digital experiences.
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div className="about-card text-box">
                            <h2>Innovating the Digital Space</h2>
                            <p>
                                We push boundaries with innovation to keep your
                                brand ahead in the digital world
                            </p>
                        </div>

                        <div className="about-card image-box phone-box">
                            <img src={Phone} alt="Phone Icon" />
                        </div>

                        {/* Row 3 */}
                        <div className="about-card image-box bulb-box">
                            <img src={Girl2} alt="Mission Icon" />
                        </div>

                        <div className="about-card text-box">
                            <h2>Your Growth, Our Mission</h2>
                            <p>
                                Your growth defines our success. We deliver
                                results-driven digital solutions that create real impact.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ---------------------------------Service---------------------------------- */}

            <section className="services-section">
                <div className="services-container">

                    <h1 className="services-heading">OUR SERVICES</h1>

                    <div className="services-grid">

                        {/* Left Card */}
                        <div className="service-card small-card">
                            <h2>SEO</h2>
                            <p>
                                Our strategies and tailored strategies, we drive
                                meaningful results and long-term success.
                            </p>

                            <div className="service-img-box left-img">
                                <img src={LeftGirl} alt="SEO Girl" />
                            </div>
                        </div>

                        {/* Center Card */}
                        <div className="service-card center-card">
                            <h2>Social Media Management</h2>
                            <p>
                                Our goal is simple to help your brand grow.
                                Through strong partnerships and tailored strategies,
                                we drive meaningful results and long-term success
                            </p>

                            <div className="service-img-box center-img">
                                <img src={CenterGirl} alt="Social Media Girl" />
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="service-card small-card">
                            <h2>Web Development</h2>
                            <p>
                                Our goal is simple to help your brand grow.
                                Through strong partnerships and tailored strategies.
                            </p>

                            <div className="service-img-box right-img">
                                <img src={RightGirl} alt="Web Girl" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*------------------------------ why choose us ---------------------------------*/}

            <section className="w-section">
                <div className="w-container">

                    <div className="w-bulb">
                        <img src={BulbImg} alt="Bulb" />
                    </div>

                    <h1 className="w-heading">Why Choose Us</h1>

                    <p className="w-subtitle">
                        At The Soul Solution, we believe every brand has a story.
                        We turn that story into powerful digital experiences that
                        people actually connect with.
                    </p>

                    <div className="w-grid">

                        <div className="w-card">
                            <h2>Strategy First, Always</h2>
                            <p>
                                We don’t believe in random posting or guesswork.
                                Every move is backed by research, data, and a clear growth plan.
                            </p>
                        </div>

                        <div className="w-card">
                            <h2>Creative That Actually Connects</h2>
                            <p>
                                Designs that don’t just look good —
                                they feel right and drive action.
                            </p>
                        </div>

                        <div className="w-card">
                            <h2>Results You Can Measure</h2>
                            <p>
                                From engagement to conversions,
                                everything we do is focused on real, trackable results.
                            </p>
                        </div>

                        <div className="w-card">
                            <h2>We Work Like Your Team</h2>
                            <p>
                                Not an agency, an extension of your brand.
                                We grow with you, not just for you.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;