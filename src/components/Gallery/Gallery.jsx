import React from "react";
import "./Gallery.css";

// ✅ Import your own gallery images here
import g1 from "../../assets/gallery/g1.jpg";
import g2 from "../../assets/gallery/g2.jpg";
import g3 from "../../assets/gallery/g3.jpg";
import g4 from "../../assets/gallery/g4.jpg";
import g5 from "../../assets/gallery/g5.jpg";
import g6 from "../../assets/gallery/g6.jpg";

const images = [g1, g2, g3, g4, g5, g6];

export default function Gallery() {
  return (
    <section className="cp-gallery" id="gallery">
      <div className="gallery-header">
        <h2>Our Lovely Companions</h2>
        <p>Scroll to explore happy paws and feathered friends</p>
      </div>

      <div className="gallery-scroll">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Pet ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
