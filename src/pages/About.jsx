import React from "react";
import "./About.css";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT: Logo / Visual */}
        <div className="about-left">
          <img src={logo} alt="Cage&Pot Logo" className="about-logo" />
        </div>

        {/* RIGHT: Text Content */}
        <div className="about-right">
          <h1>About <span>Cage&amp;Pot</span></h1>
          <p className="about-intro">
            At <strong>Cage&amp;Pot</strong>, we believe every pet deserves the
            best — from cozy shelters to tasty treats and playful accessories.
            Founded with love for animals, we bring together premium products,
            expert guidance, and genuine care to make your pet’s life happier
            and healthier.
          </p>

          <p className="about-story">
            What began as a small local pet store on Lalbagh Road has now grown
            into a trusted name for pet owners across the city. Our goal is to
            create a one-stop destination for pet lovers where compassion meets
            quality.
          </p>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              To nurture the bond between humans and pets through exceptional
              products, reliable advice, and heartfelt service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
