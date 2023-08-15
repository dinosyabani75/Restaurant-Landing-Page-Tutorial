import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// routes config
import routes from "./routes";
// const Home = React.lazy(() => import("./Components/Home"));
// const About = React.lazy(() => import("./Components/About"));
// const Work = React.lazy(() => import("./Components/Work"));
// const Testimonial = React.lazy(() => import("./Components/Testimonial"));
// const Contact = React.lazy(() => import("./Components/Contact"));
// const Footer = React.lazy(() => import("./Components/Footer"));
// const Produk = React.lazy(() => import("./Pages/Produk"));
// const Tentang = React.lazy(() => import("./Pages/Tentang"));
// const Kontak = React.lazy(() => import("./Pages/Kontak"));
// const Katalog = React.lazy(() => import("./Pages/Katalog"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              );
            })}
            {/* <Route exact path="/" name="Home" element={<Home />} />
            <Route exact path="/Produk" name="Produk" element={<Produk />} />
            <Route exact path="/Tentang" name="Tentang" element={<Tentang />} />
            <Route exact path="/Kontak" name="Kontak" element={<Kontak />} />
            <Route exact path="/Katalog" name="Katalog" element={<Katalog />} />
            <Route exact path="/About" name="About" element={<About />} />
            <Route exact path="/Work" name="Work" element={<Work />} />
            <Route
              exact
              path="/Testimonial"
              name="Page Testimonial"
              element={<Testimonial />}
            />
            <Route exact path="/Contact" name="Contact" element={<Contact />} />
            <Route exact path="/Footer" name="Footer" element={<Footer />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
