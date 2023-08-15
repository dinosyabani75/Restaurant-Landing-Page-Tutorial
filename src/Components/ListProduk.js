import React from "react";
import AERTRAX from "../Assets/ProdukApp/AERTRAX_NoBG.png";
import SFC from "../Assets/efoypro2800.png";

const ListProduk = () => {
  const produkArray = [
    {
      image: AERTRAX,
      title: "AERTRAX",
      text: "Pemantauan kualitas udara.",
    },
    {
      image: SFC,
      title: "SFC Energy",
      text: "Energi alternatif independen.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">List</p>
        <h1 className="primary-heading">Produk</h1>
        <div className="work-section-bottom">
          {produkArray.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <span className="button">
                  {" "}
                  <img src={data.image} alt="" />{" "}
                </span>
              </div>
              <h2>{data.title}</h2>
              <p className="primary-text">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduk;
