import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "../Assets/Giwang/home-banner-background.png";

const Tentang = () => {
  return (
    <>
      <Navbar />
      <div className="work-section-wrapper">
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="work-section-top">
          <p className="primary-subheading">Tentang</p>
          <h1 className="primary-heading">Perusahaan</h1>
          <span>
            PT GIWANG KANAKA adalah perusahaan swasta Indonesia dan didirikan
            pada Januari 1990. Kegiatan perusahaan adalah dalam perdagangan umum
            dan persediaan yang menekankan pada Proyek Pemerintah yang didanai
            oleh Multilateral (ADB / IBRD) dan/atau kerjasama keuangan Bilateral
            (pinjaman lunak dan/atau JICA sebelumnya OECF ) dan/atau Anggaran
            Pendapatan dan Belanja Negara/Daerah (APBN/APBD). Memiliki
            pengalaman panjang dengan dukungan 20 staf profesional &
            berpengalaman serta jaringannya.
          </span>
          <p></p>
          <span>
            PT. GIWANG KANAKA telah menjadi perusahaan yang handal dan terampil
            dalam partisipasi dan pelaksanaan proyek pemerintah antara lain:
            Kementerian Pendidikan dan Kebudayaan Menteri Kesehatan Kementerian
            Lingkungan Hidup Dinas Lingkungan Hidup Provinsi dan lainnya.
          </span>
          <p></p>
          <span>
            PT. GIWANG KANAKA juga bertindak sebagai agen / distributor /
            perwakilan / mitra lokal dari Perusahaan Eropa yang mapan, antara
            lain : Sistem Medis Listrik (EMS) Handels Gesselschaft m.b.H –
            Austria (Peralatan Medis). AME International GmbH – Austria
            (Peralatan Medis). AMST Systemtechnik GmbH – Austria (Penerbangan
            dan Kedokteran Dirgantara).
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tentang;
