import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../assets/Logo_o.png";
import { NavLink } from "react-router-dom";

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
          <img src={Logo} alt="Soul & Solution" className="logo-img" />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Button */}
        <button className="contact-btn">Get in touch</button>

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
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>

          <button className="contact-btn mobile-btn">
            Get in touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;