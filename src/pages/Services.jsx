// Services.jsx
import React from "react";
import "./Services.css";

import CenterImg from "../assets/ser-center-bg.png";
import LeftShape from "../assets/ser-left.png";
import RightShape from "../assets/ser-right.png";

const Services = () => {
    return (
        <>

            {/*------------------------------------------ Top-------------------------- */}
            <section className="ser-section">
                {/* Side Shapes */}
                <div className="ser-left-shape">
                    <img src={LeftShape} alt="shape" />
                </div>

                <div className="ser-right-shape">
                    <img src={RightShape} alt="shape" />
                </div>

                <div className="ser-container">

                    {/* Heading */}
                    <h1 className="ser-heading">
                        Solutions That Don’t Just Work
                        <span>They Connect</span>
                    </h1>

                    {/* Button */}
                    <button className="ser-btn">
                        Get in touch
                    </button>

                    {/* Center Image */}
                    <div className="ser-img-box">
                        <img src={CenterImg} alt="team" className="ser-img" />
                    </div>

                </div>
            </section>

            {/*------------------------------------ What we do best ----------------------*/}
            <section className="wwdb-section">
                <div className="wwdb-container">

                    {/* Heading */}
                    <h1 className="wwdb-heading">What We Do Best</h1>

                    <p className="wwdb-subtitle">
                        From strategy to execution, we provide end-to-end digital
                        solutions tailored to your brand’s voice and goals.
                    </p>

                    {/* Grid */}
                    <div className="wwdb-grid">

                        <div className="wwdb-card wwdb-round-br">
                            <h2>Social media management</h2>
                            <p>
                                We build data-driven marketing strategies that help
                                your brand reach the right audience at the right
                                time maximizing visibility, engagement, and ROI.
                            </p>

                            <ul>
                                <li>Performance Marketing</li>
                                <li>Campaign Strategy</li>
                                <li>Funnel Optimization</li>
                            </ul>
                        </div>

                        <div className="wwdb-card wwdb-round-bl">
                            <h2>Graphic designing</h2>
                            <p>
                                We create meaningful content and manage your
                                platforms to build a strong, consistent, and
                                engaging brand presence.
                            </p>

                            <ul>
                                <li>Content Planning</li>
                                <li>Post Design & Copy</li>
                                <li>Growth Strategy</li>
                            </ul>
                        </div>

                        <div className="wwdb-card wwdb-round-tr">
                            <h2>Website development</h2>
                            <p>
                                We design and develop websites that are not only
                                visually stunning but optimized for performance,
                                user experience, and conversion.
                            </p>

                            <ul>
                                <li>UI/UX Design</li>
                                <li>Responsive Development</li>
                                <li>Landing Pages</li>
                            </ul>
                        </div>
                        <div className="wwdb-card wwdb-round-tl">
                            <h2>Search Engine Optimization</h2>
                            <p>
                                Our SEO strategies ensure your brand ranks higher,
                                reaches wider, and grows organically with
                                sustainable results.
                            </p>

                            <ul>
                                <li>On-page & Off-page SEO</li>
                                <li>Keyword Strategy</li>
                                <li>Technical SEO</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        

        </>
    );
};

export default Services;