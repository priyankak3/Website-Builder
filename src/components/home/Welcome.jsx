// src/components/home/Welcome.jsx
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-content">
        <div className="welcome-images">
         
            <img
              src="https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJ1aWxkZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Person writing"
            />
          
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
      
    </section>
  );
};

export default Welcome;
