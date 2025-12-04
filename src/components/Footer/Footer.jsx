import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png"; // your logo image

export default function Footer() {
  return (
    <footer className="cp-footer" id="contact">
      <div className="cp-footer-inner">
        {/* Brand */}
        <div className="cp-footer-brand">
          <div className="cp-footer-logo">
            <img src={logo} alt="Cage&Pot logo" />
            <span>Cage&amp;Pot</span>
          </div>
          <p className="cp-footer-tagline">
            Bringing love, care and comfort to every pet home.
          </p>
        </div>

        {/* Contact & Social side-by-side */}
        <div className="cp-footer-contact">
          <div className="cp-footer-block">
            <h3>Contact</h3>
            <p>
              📞 <a href="tel:+911234567890">+91 12345 67890</a>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:contact@cageandpot.com">
                contact@cageandpot.com
              </a>
            </p>
          </div>

          <div className="cp-footer-block cp-footer-social-block">
            <h3>Connect with us</h3>
            <div className="cp-footer-social">
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.9c1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.8v7A10 10 0 0 0 22 12" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7m0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3m5 2.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2m0 2a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2m4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.1 4.1 0 0 0 1.8-2.27c-.8.48-1.7.84-2.6 1A4.1 4.1 0 0 0 16 4a4.2 4.2 0 0 0-4.2 4.2c0 .33.04.64.1.95A11.8 11.8 0 0 1 3.1 5.1a4.3 4.3 0 0 0-.6 2.1 4.2 4.2 0 0 0 1.9 3.5 4.1 4.1 0 0 1-1.9-.5v.05a4.2 4.2 0 0 0 3.4 4.1c-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1a4.2 4.2 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 19.6a11.7 11.7 0 0 0 6.3 1.9c7.6 0 11.8-6.4 11.8-11.8v-.5c.8-.5 1.6-1.2 2.2-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Location & Map */}
        <div className="cp-footer-map">
          <h3>Location</h3>
          <p>Cage&amp;Pot, Lalbagh Road (Shop)</p>
          <iframe
            title="Cage&Pot Lalbagh Road"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.532349207051!2d75.6256995751232!3d21.317801981968163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f8c6b6ef6f3%3A0x6cbb1ee06a94d81a!2sLalbagh%20Rd%2C%20Burhanpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1701628387750!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>

      <div className="cp-footer-bottom">
        <p>© {new Date().getFullYear()} Cage&amp;Pot. All rights reserved.</p>
      </div>
    </footer>
  );
}
