// src/components/home/Welcome.jsx
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-content">
        <div className="welcome-images">
          <div className="image-person">
            <img src="/assets/images/person-writing.jpg" alt="Person writing" />
          </div>
          <div className="image-neon">
            <img
              src="/assets/images/neon-sign.jpg"
              alt="Do something great neon sign"
            />
            <div className="edit-button">Edit</div>
          </div>
        </div>
        <div className="welcome-text">
          <h2>Welcome to Website Builder: Crafting Digital Dreams</h2>
          <p>
            We empower businesses with innovative solutions, driving growth and
            creating lasting impact. Join us to shape tomorrow.
          </p>
          <Link to="/about" className="link-arrow">
            Learn More Here <i className="icon-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="client-logos">
        {/* 9 logo placeholders */}
        {[...Array(9)].map((_, index) => (
          <div key={index} className="logo-box">
            <img
              src={`/assets/images/logos/logoipsum-${index + 1}.svg`}
              alt={`Client logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Welcome;
