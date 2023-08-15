/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Logo from "../Assets/Giwang/logoGiwang.png";
import {
  FaPhone,
  FaEnvelope,
  FaGlobeAsia,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="giwang" width="75px" height="75px" />
        </div>
        <span>PT. Giwang Kanaka © All Right Reserved {year}</span>
        <p>Marketing and Technical Support Labs.</p>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <h2>Menu</h2>
          <span>
            <a href="/" className="Link">
              Beranda
            </a>
          </span>
          <span>
            <a href="/Produk" className="Link">
              Produk
            </a>
          </span>
          <span>
            <a href="/Tentang" className="Link">
              Tentang
            </a>
          </span>
          <span>
            <a href="/Kontak" className="Link">
              Kontak
            </a>
          </span>
        </div>
        <div className="footer-section-columns">
          <h2>Produk</h2>
          <span>
            <a href="/produk-aqms" className="Link">
              AERTRAX
            </a>
          </span>
          <span>
            <a href="/produk-sfc" className="Link">
              SFC Energy EFOY
            </a>
          </span>
        </div>
        <div className="footer-section-columns">
          <h2>Hubungi Kami</h2>
          <div className="footer-icons">
          <span>
            <a
              href="https://www.giwangkanaka.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="Link"
            >
              <FaGlobeAsia />
            </a>
          </span>
          <span>
            <a
              href="mailto:info@giwangkanaka.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="Link"
            >
              <FaEnvelope />
            </a>
          </span>
          <span>
            <a href="tel:+62213857272" className="Link">
              <FaPhone />
            </a>
          </span>
          <a
            href="https://goo.gl/maps/o6Z4zzttyJ1APa1D6"
            target="_blank"
            rel="noopener noreferrer"
            className="Link"
          >
            <FaMapMarkedAlt />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
