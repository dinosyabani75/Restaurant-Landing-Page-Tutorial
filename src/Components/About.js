import React from "react";
import AboutBackground from "../Assets/Giwang/about-background.png";
import ProdukImage from "../Assets/produkAqms-nobg.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={ProdukImage} width="1000px" height="1000px" alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">
            Sistem Pemantau Kualitas Udara sangat berperan penting dalam
            kehidupan.
          </h1>
          <p className="primary-text">
            Berkolaborasi dengan SFC Energy untuk listrik yang ramah lingkungan.
          </p>
          <p className="primary-text">
            Perpaduan penggunaan listrik yang tidak akan mencemari udara, dan
            perhitungan sensor kualitas udara yang terbarukan.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Pelajari Lebih</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Lihat Video
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
