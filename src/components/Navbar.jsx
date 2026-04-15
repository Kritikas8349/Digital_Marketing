import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_o.png";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleClick = (e) => {
      const menu = document.querySelector(".mobile-menu");
      const icon = document.querySelector(".menu-icon");
  
      if (
        menu &&
        !menu.contains(e.target) &&
        !icon.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
  
    document.addEventListener("click", handleClick);
  
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={Logo}
              alt="Soul & Solution"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Button */}
        <Link to="/contact">
          <button className="contact-btn">Get in touch</button>
        </Link>

        {/* Hamburger */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="contact-btn mobile-btn">
              Get in touch
            </button>
          </Link>
        </div>
      )}

      <div className="wave-shape"></div>
    </header>
  );
};

export default Navbar;