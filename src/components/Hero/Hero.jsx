import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

import pet1 from "../../assets/hero/pet1.jpg";
import pet2 from "../../assets/hero/pet2.jpg";
import pet3 from "../../assets/hero/pet3.jpg";

const heroImages = [
  { src: pet1, label: "Buddy • Golden Retriever" },
  { src: pet2, label: "Mittens • Persian Cat" },
  { src: pet3, label: "Rio • Macaw Parrot" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // ✅ React Router hook

  // change image every 4 seconds
  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % heroImages.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  const { src, label } = heroImages[currentIndex];

  // ✅ Navigate on button click
  const handleShopNow = () => navigate("/shop");
  const handleViewGallery = () => navigate("/gallery");

  return (
    <section className="cp-hero" id="home">
      <div className="cp-hero-inner">
        {/* LEFT SIDE */}
        <div className="cp-hero-left">
          <p className="cp-hero-badge">Premium Pet Store • Cage&amp;Pot</p>

          <h1>
            Everything your <span>best friend</span> needs.
          </h1>

          <p className="cp-hero-subtitle">
            Food, toys, cages and accessories curated for healthy, happy pets.
          </p>

          <div className="cp-hero-actions">
            <button
              className="cp-hero-btn cp-hero-btn-primary"
              onClick={handleShopNow}
            >
              Shop Now
            </button>
            <button
              className="cp-hero-btn cp-hero-btn-ghost"
              onClick={handleViewGallery}
            >
              View Gallery
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – Dynamic Image */}
        <div className="cp-hero-right">
          <div className="cp-hero-card">
            <div className="cp-hero-card-bg" />

            <div className="cp-hero-photo-wrap">
              <img key={src} src={src} alt={label} className="cp-hero-photo" />

              <div className="cp-hero-photo-info">
                <p className="cp-hero-photo-title">{label}</p>
                <p className="cp-hero-photo-meta">
                  Vaccinated • Friendly • Ready for new home
                </p>
              </div>
            </div>

            <div className="cp-hero-dots">
              {heroImages.map((_, i) => (
                <span
                  key={i}
                  className={`cp-dot ${i === currentIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
