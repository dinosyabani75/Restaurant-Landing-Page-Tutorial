import React from "react";
import BannerBackground from "../Assets/Giwang/home-banner-background.png";
import ProdukImage from "../Assets/ProdukApp/AERTRAX_NoBG.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Table from "./Table";
// import Maps from "./Maps";
import VisiMisi from "./VisiMisi";
import Slider from "./Slider";
import ListProduk from "./ListProduk";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div name="home" className="home-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">AERTRAX</h1>
            <h2>Stasiun Pemantau Kualitas Udara</h2>
            <p className="primary-text">
              Membantu anda dalam menentukan kualitas udara dengan sensor O3,
              SO2, NO2, dan CO berkualitas tinggi. Dilengkapi dengan Energi
              Alternatif Independen, SFC EFOY PRO.
            </p>
            <button className="secondary-button">
              <a href="/produk-aqms" className="Link">
                Lihat Produk <FiArrowRight />{" "}
              </a>
            </button>
          </div>
          <div className="home-image-section">
            <img src={ProdukImage} alt="" />
          </div>
        </div>
      </div>
      {/* <div name="home" className="home-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">
              <Table />
            </h1>
          </div>
          <div className="home-image-section">
            <Maps />
          </div>
        </div>
      </div> */}
      <VisiMisi />
      <ListProduk />
      <Footer />
    </>
  );
};

export default Home;
