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
import logo1 from "../assets/logo_dig.png"

const Footer = () => {
    return (    
        <>
            {/*------------------------------------- Top ------------------------------ */}

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

            {/*----------------------------------- Bottom -----------------------------*/}

            <footer className="footer">

  {/* TOP SECTION */}
  <div className="footer__container">

    {/* LOGO */}
    <div className="footer__col">
      <div className="footer__logo">
        <img src={logo1} alt="logo" />
      </div>

      <p>
        Empowering businesses with smart digital marketing,
        creative branding, and growth-focused strategies.
      </p>
    </div>

    {/* NAVIGATION */}
    <div className="footer__col">
      <h4>Navigation</h4>
      <ul>
        <li onClick={() => window.location.href = "/"}>Home</li>
        <li onClick={() => window.location.href = "/about"}>About Us</li>
        <li onClick={() => window.location.href = "/services"}>Services</li>
        <li onClick={() => window.location.href = "/contact us"}>Contact Us</li>
      </ul>
    </div>

    {/* QUICK LINKS */}
    <div className="footer__col">
      <h4>Quick Links</h4>
      <ul>
        <li onClick={() => window.location.href = "/contact"}>Contact Us</li>
        <li onClick={() => window.location.href = "/faq"}>FAQs</li>
        <li onClick={() => window.location.href = "/pricing"}>Pricing</li>
        <li onClick={() => window.location.href = "/blog"}>Blog</li>
      </ul>
    </div>

    {/* SERVICES */}
    <div className="footer__col">
      <h4>Services</h4>
      <ul>
        <li onClick={() => window.location.href = "/services/seo"}>SEO</li>
        <li onClick={() => window.location.href = "/services/social-media"}>Social Media</li>
        <li onClick={() => window.location.href = "/services/web-development"}>Web Development</li>
        <li onClick={() => window.location.href = "/services/branding"}>Branding</li>
      </ul>
    </div>

  </div>

  {/* BOTTOM SECTION */}
  <div className="footer__bottom">
    <div className="footer__bottom-content">

      {/* Address */}
      <div className="footer__item">
        <FaMapMarkerAlt />
        <span>Bhopal, Madhya Pradesh, India</span>
      </div>

      {/* Phone */}
      <div className="footer__item">
        <FaPhoneAlt />
        <span>+91 98765 43210</span>
      </div>

      {/* Email */}
      <div className="footer__item">
        <FaEnvelope />
        <span>info@thesoulsolution.com</span>
      </div>

      {/* Social */}
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
      </div>

    </div>

    <div className="footer__divider"></div>
  </div>

  {/* COPYRIGHT */}
  <div className="footer__copyright">
    © 2026 TheSoulSolution - All Rights Reserved
  </div>

</footer>

        </>
    );
};

export default Footer;