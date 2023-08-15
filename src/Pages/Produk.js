import React from "react";
import AERTRAX from "../Assets/ProdukApp/AERTRAX_NoBG.png";
import SFC from "../Assets/efoypro2800.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutBackground from "../Assets/Giwang/about-background.png";
import BannerBackground from "../Assets/Giwang/home-banner-background.png";
const Work = () => {
  const workInfoData = [
    {
      image: AERTRAX,
      title: "Stasiun Pemantau Kualitas Udara",
      text: "Pemantau Kualitas Udara dengan Indeks Kesalahan terendah di Indonesia.",
      link: "/produk-aqms",
    },
    {
      image: SFC,
      title: "SFC Energy EFOY",
      text: "Energi Alternatif Independen, dengan mobilitas tinggi untuk dibawa kemana saja.",
      link: "/produk-sfc",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <p className="primary-subheading">Produk</p>
          <h1 className="primary-heading">Terdepan</h1>
        </div>
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p className="primary-text-sm">{data.text}</p>
              <button className="primary-button-product">
                <a href={data.link} className="Link">
                  Detail
                </a>
              </button>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Work;
