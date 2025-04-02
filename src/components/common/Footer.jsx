import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            WebForage is dedicated to helping businesses build strong online
            presences with creative, user-centric websites and digital marketing
            strategies. Our mission is to provide innovative solutions to help
            you succeed in the digital world.
          </p>
        </div>

        <div className="footer-section contact">
          <div className="company-info">
            <h3>Contact Us</h3>
            <p>
              Email: <a href="mailto:info@webforage.com">info@webforage.com</a>
            </p>
            <h3>Office Address: </h3>
            <p>1234 Website St, Web City, WC 12345</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} WebForage. All rights reserved.
          <Link to="/privacy-policy">Privacy Policy</Link> |
          <Link to="/terms-of-service">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
