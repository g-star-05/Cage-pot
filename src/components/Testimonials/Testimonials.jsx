import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ananya Singh",
    pet: "Cat Owner",
    text: "Cage & Pot has the best quality pet accessories I’ve ever found! My cat loves their toys and cozy beds.",
    avatar: "A",
    stars: "★★★★★",
  },
  {
    name: "Rohit Sharma",
    pet: "Dog Parent",
    text: "The leash and food products are top-notch! My dog Bruno is obsessed with his new chew toys.",
    avatar: "R",
    stars: "★★★★★",
  },
  {
    name: "Meera Patil",
    pet: "Bird Enthusiast",
    text: "I finally found a pet shop that cares! The cages are clean, safe, and beautifully designed.",
    avatar: "M",
    stars: "★★★★☆",
  },
  {
    name: "Vikram Joshi",
    pet: "Aquarium Lover",
    text: "Their aquarium setups are stunning — my fish are happier than ever! Great service too.",
    avatar: "V",
    stars: "★★★★★",
  },
  {
    name: "Priya Deshmukh",
    pet: "Rabbit Owner",
    text: "Loved the experience! Their pet care advice was genuine and helpful.",
    avatar: "P",
    stars: "★★★★★",
  },
  {
    name: "Aarav Mehta",
    pet: "Dog Parent",
    text: "My golden retriever’s coat looks shinier thanks to the food recommended by Cage & Pot!",
    avatar: "A",
    stars: "★★★★☆",
  },
];

export default function Testimonials() {
  return (
    <section className="cp-testimonials">
      <div className="cp-testimonials-inner">
        <div className="cp-testimonials-header">
          <h2>What Our Pet Lovers Say</h2>
          <p>Happy tails, fluttering wings, and purring hearts — all from our lovely customers!</p>
        </div>

        {/* Scrollable section */}
        <div className="cp-testimonials-scroll">
          <div className="cp-testimonials-grid">
            {testimonials.concat(testimonials).map((t, index) => (
              <div className="cp-testimonial-card" key={index}>
                <div className="cp-testimonial-avatar">{t.avatar}</div>
                <div className="cp-testimonial-content">
                  <p className="cp-testimonial-text">“{t.text}”</p>
                  <span className="cp-testimonial-name">{t.name}</span>
                  <span className="cp-testimonial-pet">{t.pet}</span>
                  <span className="cp-testimonial-stars">{t.stars}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
