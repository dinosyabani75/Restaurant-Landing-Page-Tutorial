import React from "react";
import AboutBackground from "../Assets/Giwang/about-background.png";
import BannerBackground from "../Assets/Giwang/home-banner-background.png";
import ProdukImage from "../Assets/restapi2-nobg.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SpecsAPI from "../Pages/ProdukSpecs/SpecsAPI.js";
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
          <h1 className="primary-heading">Rest API</h1>
          <p className="primary-text">
            Dilengkapi dengan API untuk pengintegrasian data ke platform user
            dalam format JSON.
          </p>
          <p className="primary-text">
            Dengan format table yang telah dinormalisasi sehingga load data
            menjadi lebih cepat.
          </p>
          {/* <div className="about-buttons-container">
            <Link to="" style={{ color: "white" }}>
              <button className="secondary-button">Detail API</button>
            </Link>
          </div> */}
        </div>
      </div>
      <p></p>
      <SpecsAPI />
      <Footer />
    </>
  );
};

export default About;
