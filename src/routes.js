import React from 'react'

// Menu Utama
const Home = React.lazy(() => import("./Components/Home"));
const About = React.lazy(() => import("./Components/About"));
const Work = React.lazy(() => import("./Components/Work"));
const Testimonial = React.lazy(() => import("./Components/Testimonial"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Produk = React.lazy(() => import("./Pages/Produk"));
const Tentang = React.lazy(() => import("./Pages/Tentang"));
const Kontak = React.lazy(() => import("./Pages/Kontak"));
const Katalog = React.lazy(() => import("./Pages/Katalog"));
const ProdukAPI = React.lazy(() => import("./Pages/ProdukAPI"));
const ProdukAQMS = React.lazy(() => import("./Pages/ProdukAQMS"));
const ProdukSFC = React.lazy(() => import("./Pages/ProdukSFC"));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // Menu Utama
  { path: '/', name: 'Home', element: Home },
  { path: '/produk', name: 'Produk', element: Produk },
  { path: '/tentang', name: 'Tentang', element: Tentang },
  { path: '/kontak', name: 'Kontak', element: Kontak },
  { path: '/katalog', name: 'Katalog', element: Katalog },
  { path: '/about', name: 'About', element: About },
  { path: '/work', name: 'Work', element: Work },
  { path: '/testimonial', name: 'Testimonial', element: Testimonial },
  { path: '/contact', name: 'Contact', element: Contact },
  { path: '/navbar', name: 'Navbar', element: Navbar },
  { path: '/footer', name: 'Footer', element: Footer },
  { path: '/produk-aqms', name: 'GIWAQMS', element: ProdukAQMS },
  { path: '/produk-sfc', name: 'SFC Energy EFOY', element: ProdukSFC },
  { path: '/produk-api', name: 'Rest API', element: ProdukAPI },
]

export default routes
