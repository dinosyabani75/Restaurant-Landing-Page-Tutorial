import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Components/Home"

const DefaultLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Navbar />
        <div className="body flex-grow-1 px-3">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
