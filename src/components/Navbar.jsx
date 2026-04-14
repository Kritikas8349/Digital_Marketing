// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/Logo_o.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src={Logo}
            alt="Soul & Solution"
            className="logo-img"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>

        {/* Button */}
        <button className="contact-btn">Get in touch</button>

        {/* Mobile Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <button className="contact-btn mobile-btn">
            Get in touch
          </button>
        </div>
      )}

      {/* Bottom Wave */}
      <div className="wave-shape"></div>
    </header>
  );
};

export default Navbar;