// Footer.jsx
import React from "react";
import "./Footer.css";
import HandImg from "../assets/footer-hand.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo1 from "../assets/Logo_o.png"

const Footer = () => {
    return (
        <>
            {/*------------------------------------- Top------------------------------ */}
            <section className="top-section">
                <div className="top-container">

                    {/* Left Side */}
                    <div className="top-left">
                        <h1 className="top-heading">
                            Let’s talk 
                            about <br />
                            everything!
                        </h1>

                        <p className="top-subtext">
                            We are open to any suggestion or
                            just have a chat
                        </p>

                        <div className="top-img-box">
                            <img src={HandImg} alt="Hand" className="top-img" />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="top-right">
                        <form className="top-form">

                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="top-input"
                            />

                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="top-input"
                            />

                            <input
                                type="text"
                                placeholder="Mobile No."
                                className="top-input"
                            />

                            <input
                                type="text"
                                placeholder="Website URL"
                                className="top-input"
                            />

                            <select className="top-input top-select">
                                <option>Select Services</option>
                                <option>SEO</option>
                                <option>Social Media</option>
                                <option>Web Development</option>
                                <option>Branding</option>
                            </select>

                            <textarea
                                rows="4"
                                placeholder="Write Message"
                                className="top-input top-textarea"
                            ></textarea>

                            <button className="top-btn">
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </section>

            {/* Bottom */}
            <footer className="footer">

                {/* TOP SECTION */}
                <div className="footer__container">

                    {/* LOGO */}
                    <div className="footer__col">
                        <div className="footer__logo">
                            <img src={logo1} alt="logo" />
                        </div>
                        <p>
                            Empowering smarter trading with expert
                            insights and your financial growth in focus.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div className="footer__col">
                        <h4>Navigation</h4>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Research</li>
                        </ul>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer__col">
                        <h4>Quick Link</h4>
                        <ul>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Research</li>
                            <li>Services</li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div className="footer__col">
                        <h4>Services</h4>
                        <ul>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM SECTION (ALIGNED WITH COLUMNS) */}
                <div className="footer__bottom">
                    <div className="footer__bottom-content">

                        {/* Column 1 */}
                        <div className="footer__item">
                            <FaMapMarkerAlt />
                            <span>USA</span>
                        </div>

                        {/* Column 2 */}
                        <div className="footer__item">
                            <FaPhoneAlt />
                            <span>(+876) 765 665</span>
                        </div>

                        {/* Column 3 */}
                        <div className="footer__item">
                            <FaEnvelope />
                            <span>mail@capex.id</span>
                        </div>

                        {/* Column 4 */}
                        <div className="footer__socials">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaYoutube />
                        </div>

                    </div>

                    {/* DIVIDER */}
                    <div className="footer__divider"></div>
                </div>

                {/* COPYRIGHT */}
                <div className="footer__copyright">
                    © 2026 Capex - All Rights Reserved
                </div>

            </footer>

        </>
    );
};

export default Footer;