/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import BannerBackground from "../Assets/Giwang/home-banner-background.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Mail from "../Assets/mail.png";
import Phone from "../Assets/phone-call.png";
import Maps from "../Assets/maps-and-flags.png";
const Contact = () => {
  const workInfoData = [
    {
      image: Maps,
      title: "Alamat",
      text: "Jl. Batang Hari No.23A, RT.13/RW.5, Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10150.",
    },
    { image: Phone, title: "Telephone", text: "+62213857272" },
  ];
  return (
    <>
      <Navbar />
      <div className="contact-page-wrapper">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <p className="primary-subheading">Kontak</p>
        <h1 className="primary-heading">Menginginkan Produk Kami?</h1>
        <h1 className="primary-heading">Hubungi</h1>
      </div>
      <div className="work-section-bottom">
        <div className="work-section-info">
          <div className="info-boxes-img-container">
            <img src={Mail} height="35px" width="35px" alt="" />
          </div>
          <h2>E-mail</h2>
          <a href="mailto:info@giwangkanaka.co.id" className="Link">
            info@giwangkanaka.co.id
          </a>
        </div>
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} height="35px" width="35px" alt="" />
            </div>
            <h2>{data.title}</h2>
            <span>{data.text}</span>
          </div>
        ))}
      </div>
      <div className="contact-page-wrapper">
        <p className="primary-heading">Dimana Kami</p>
        <p className="primary-heading">Berada?</p>
      </div>
      <div className="map-column">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.673262658512!2d106.8070346142411!3d-6.174479795529851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43e5436f091%3A0xb8d1f0afa2260880!2sPT.%20Giwang%20Kanaka!5e0!3m2!1sid!2sid!4v1675325547354!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
