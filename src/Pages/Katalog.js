import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/Giwang/home-banner-background.png";

const Work = () => {
  return (
    <>
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <h2 className="d-flex justify-content-center align-items-center">
        ON PROGRESS
      </h2>
      <Footer />
    </>
  );
};

export default Work;
