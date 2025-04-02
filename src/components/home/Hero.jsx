// src/components/home/Hero.jsx
import { Link } from "react-router-dom";

const Hero = () => {
  const aiData = {
    image:
      "https://res.cloudinary.com/drihmlyza/image/upload/v1743260123/odnoobt6ew4prbn131fb.jpg",
    backgroundImages: [
      "https://res.cloudinary.com/dbyioi2qq/q_auto/v1701766367/static/illustrationpng_1701766127_42730.png",
      "https://res.cloudinary.com/dbyioi2qq/q_auto/v1701766435/static/vectorpng_1701766195_89727.png",
      "https://res.cloudinary.com/dbyioi2qq/q_auto/v1701766390/static/vectorpng_1701766150_61868.png",
      "https://res.cloudinary.com/dbyioi2qq/q_auto/v1701766355/static/illustrationpng_1701766114_35035.png",
    ],
    backgroundPosition: "400px 50%, 100% 50%, 0% 100%, 50px 330px",
    backgroundSize: "20% auto, 40% auto, 50% auto, 20% auto",
    backgroundRepeat:
      "no-repeat no-repeat, no-repeat no-repeat, no-repeat no-repeat, no-repeat no-repeat",
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-phone">
          <div className="hero-bg">
            <div className="bg-images-container">
              <img
                src={aiData.backgroundImages[0]}
                alt="background-1"
                className="bg-image top-right"
              />
              <img
                src={aiData.backgroundImages[1]}
                alt="background-2"
                className="bg-image top-right"
              />
            </div>
            <img
              src={aiData.image} // Use AI-generated image here
              alt="Website on mobile phone"
              className="phone-image"
            />
            <img
              src={aiData.backgroundImages[2]}
              alt="background-3"
              className="bg-image bottom-left"
            />
            <img
              src={aiData.backgroundImages[3]}
              alt="background-4"
              className="bg-image left-under"
            />
          </div>
        </div>
        <div className="hero-text">
          <div className="hero-heading">
            <h1>
              Build websites.
              <br /> Unleash Your Creativity.
            </h1>
          </div>
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className="feature-text">
                <h3>Drag, Drop, and Design Easily</h3>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div className="feature-text">
                <h3>Customize Everything, Limitlessly Express</h3>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fa-solid fa-check-to-slot"></i>
              </div>
              <div className="feature-text">
                <h3>Mobile-Friendly Designs, Every Time</h3>
              </div>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/builder" className="btn-primary">
              Design Your Site
            </Link>
            <Link to="/trial" className="btn-secondary">
              Start Free Trial <i className="icon-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
{
  /* <section className="hero" style={{
  backgroundImage: `url(${aiData.backgroundImages[0]}), url(${aiData.backgroundImages[1]}), url(${aiData.backgroundImages[2]}), url(${aiData.backgroundImages[3]})`,
  backgroundPosition: aiData.backgroundPosition,
  backgroundSize: aiData.backgroundSize,
  backgroundRepeat: aiData.backgroundRepeat,
  backgroundAttachment: "scroll, scroll, scroll, scroll",
  backgroundClip: "border-box, border-box, border-box, border-box",
  backgroundOrigin: "padding-box, padding-box, padding-box, padding-box"
}}>
  <div className="hero-content">
    <div className="hero-phone">
      <img
        src={aiData.image}  // Use AI-generated image here
        alt="Website on mobile phone"
        style={{ borderRadius: "34px" }}
      />
    </div>
    <div className="hero-text">
      <div className="hero-heading">
        <h1>Build websites. Unleash Your Creativity.</h1>
        <div className="edit-button">Edit</div>
      </div>
      <div className="hero-features">
        <div className="feature">
          <div className="feature-icon">
            <i className="icon-lightbulb"></i>
          </div>
          <div className="feature-text">
            <h3>Drag, Drop, and Design Easily</h3>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="icon-rocket"></i>
          </div>
          <div className="feature-text">
            <h3>Customize Everything, Limitlessly Express</h3>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="icon-check"></i>
          </div>
          <div className="feature-text">
            <h3>Mobile-Friendly Designs, Every Time</h3>
          </div>
        </div>
      </div>
      <div className="hero-buttons">
        <Link to="/builder" className="btn-primary">
          Design Your Site
        </Link>
        <Link to="/trial" className="btn-secondary">
          Start Free Trial <i className="icon-arrow-right"></i>
        </Link>
      </div>
    </div>
  </div>
</section> */
}
