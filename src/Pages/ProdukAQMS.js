import React from "react";
import AboutBackground from "../Assets/Giwang/about-background.png";
import BannerBackground from "../Assets/Giwang/home-banner-background.png";
import ProdukImage from "../Assets/ProdukApp/AERTRAX_NoBG.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import AERTRAX_Specs from "../Assets/ProdukApp/AERTRAX SPESIFIKASI.pdf";
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
          <h1 className="primary-heading">Air Quality Monitoring System</h1>
          <p className="primary-text">
            Berkolaborasi dengan SFC Energy untuk listrik yang ramah lingkungan
            dan berperan penting dalam pemantauan kualitas udara yang dihirup di
            bumi.
          </p>
          <p className="primary-text">
            Perpaduan penggunaan listrik yang tidak akan mencemari udara, dan
            perhitungan sensor kualitas udara yang terbarukan.
          </p>
          <div className="about-buttons-container">
            <Link
              to={AERTRAX_Specs}
              download="AERTRAX-Spesifikasi-Teknis"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              <button className="secondary-button">Download Datasheets</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
