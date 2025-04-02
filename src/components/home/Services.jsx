// src/components/home/Services.jsx
const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Total Solutions</h2>
        <div className="services-key-features">
          <div className="key-feature">
            <i className="icon-arrow-right"></i>
            <span>Customizable Design Options</span>
          </div>
          <div className="key-feature">
            <i className="icon-arrow-right"></i>
            <span>Integrated Marketing Tools</span>
          </div>
          <div className="key-feature">
            <i className="icon-arrow-right"></i>
            <span>Smart Design Assistance</span>
          </div>
          <div className="services-cta">
            <button className="btn-secondary">Explore Services Now</button>
          </div>
        </div>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <div className="service-icon">
            <i className="icon-gear"></i>
          </div>
          <h3>Web Design</h3>
          <p>
            We offer a suite of services designed to elevate your online
            presence and drive business growth.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="icon-layers"></i>
          </div>
          <h3>UX Design</h3>
          <p>
            Engage visitors through compelling visuals, interactive elements,
            and seamless navigation for Website Builder's service.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="icon-bulb"></i>
          </div>
          <h3>SEO Boost</h3>
          <p>
            Enhance user experience with intuitive navigation, clear
            calls-to-action, and engaging content for Website Builder.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="icon-send"></i>
          </div>
          <h3>Hosting</h3>
          <p>
            Enhance user experience with intuitive navigation, clear
            calls-to-action, and engaging content for Website Builder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
