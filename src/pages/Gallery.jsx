import React from "react";
import "./Gallery.css";

// Re-use your existing gallery images
import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";

const images = [g1, g2, g3, g4, g5, g6];

export default function Gallery() {
  return (
    <section className="gallery-page">
      <div className="gallery-page-inner">
        <div className="gallery-page-header">
          <h1>Gallery</h1>
          <p>Happy moments from Cage&amp;Pot pets and their families.</p>
        </div>

        <div className="gallery-page-grid">
          {images.map((img, index) => (
            <div className="gallery-page-item" key={index}>
              <img src={img} alt={`Pet ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
