import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-container">
        {/* LEFT: Logo */}
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Cage and Pot logo" className="nav-logo-img" />
            <span>Cage&amp;Pot</span>
          </Link>
        </div>

        {/* RIGHT: Links + Login + Hamburger */}
        <div className="nav-right">
          <nav className="nav-links">
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/shop" onClick={() => setIsOpen(false)}>
              Shop Now
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </NavLink>
          </nav>

          <button className="nav-login">Login</button>

          <button
            className={`nav-hamburger ${
              isOpen ? "nav-hamburger--active" : ""
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <nav className={`nav-links-mobile ${isOpen ? "open" : ""}`}>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/gallery" onClick={() => setIsOpen(false)}>
          Gallery
        </NavLink>
        <NavLink to="/shop" onClick={() => setIsOpen(false)}>
          Shop Now
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}
