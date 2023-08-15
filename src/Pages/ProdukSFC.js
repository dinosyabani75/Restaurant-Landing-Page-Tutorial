import React from "react";
import AboutBackground from "../Assets/Giwang/about-background.png";
import BannerBackground from "../Assets/Giwang/home-banner-background.png";
import ProdukImage from "../Assets/efoypro2800.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={ProdukImage} width="75%" height="75%" alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">Produk</p>
          <h1 className="primary-heading">SFC Energy EFOY</h1>
          <p className="primary-text">
            SFC Energy memberikan sumber daya energi melalui methanol yang
            diolah menjadi ramah lingkungan dan menjadi energi alternatif
            independen yang mempunyai mobilitas tinggi.
          </p>
          <p className="primary-text">
            Perpaduan penggunaan energi terbarukan yang tidak akan mencemari
            udara.
          </p>
          <div className="about-buttons-container">
            <Link to="https://www.efoy-pro.com/wp-content/uploads/sites/10/Data-Sheet-EFOY-80_150_Pro-900_1800_2800_EN.pdf" style={{color: 'white'}}>
              <button className="secondary-button">Download Datasheets</button>
            </Link>
          </div>
          <div className="about-buttons-container">
            <Link to="https://www.efoy-pro.com/" style={{color: 'white'}}>
              <button className="secondary-button">Selengkapnya</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
