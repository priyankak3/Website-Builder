import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Welcome from "../components/home/Welcome";
import "../styles/HomePage.css";
const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Services />
      <Welcome />
    </div>
  );
};

export default HomePage;
