import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WebsitePublisher from "../builder/WebsitePublisher";

const Navbar = ({ elements, websiteData, selectedTemplate }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Website Builder</Link>
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          Home
        </Link>
        <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
          Services
        </Link>
        <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
          About
        </Link>
        <Link to="/benefits" onClick={() => setMobileMenuOpen(false)}>
          Benefit
        </Link>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </Link>

        {/* Conditional rendering based on the current path */}
        {location.pathname === "/" ? (
          <div className="navbar-cta">
            <Link to="/builder" className="btn-primary">
              Design Your Dreams
            </Link>
          </div>
        ) : location.pathname === "/builder" ? (
          <div className="builder-actions">
            <WebsitePublisher
              elements={elements}
              websiteData={websiteData}
              selectedTemplate={selectedTemplate}
            />
          </div>
        ) : null}
      </div>

      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
