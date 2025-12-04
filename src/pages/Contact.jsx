import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE: Contact info */}
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p className="contact-subtext">
            Have a question, feedback, or want to visit our shop?  
            We’d love to hear from you!
          </p>

          <div className="contact-details">
            <p>
              📞 <strong>Phone:</strong>{" "}
              <a href="tel:+911234567890">+91 12345 67890</a>
            </p>
            <p>
              ✉️ <strong>Email:</strong>{" "}
              <a href="mailto:contact@cageandpot.com">
                contact@cageandpot.com
              </a>
            </p>
            <p>
              📍 <strong>Address:</strong> Cage&amp;Pot, Lalbagh Road, Burhanpur
            </p>
          </div>

          <div className="contact-map">
            <iframe
              title="Cage&Pot Lalbagh Road Map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.532349207051!2d75.6256995751232!3d21.317801981968163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f8c6b6ef6f3%3A0x6cbb1ee06a94d81a!2sLalbagh%20Rd%2C%20Burhanpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1701628387750!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE: Contact form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea
                rows="5"
                placeholder="Your Message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
