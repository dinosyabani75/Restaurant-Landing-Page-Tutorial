import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import EfoyPro900 from "../Assets/ProdukApp/EFOY_Pro_900.png";
import EfoyPro1800 from "../Assets/ProdukApp/EFOY_Pro_1800.png";
import EfoyPro2800 from "../Assets/ProdukApp/EFOY_Pro_2800.png";
import M10 from "../Assets/ProdukApp/SFC_TP_all_M10.png";
import M28 from "../Assets/ProdukApp/SFC_M28.png";
import MT60 from "../Assets/ProdukApp/SFC_MT60.png";
import AERTRAX from "../Assets/ProdukApp/AERTRAX_NoBG.png";
// const content = [
//   {
//     image:
//       "https://www.efoy-pro.com/wp-content/uploads/sites/10/efoy-hydrogen-freigestellt-technology-en-600x332.png",
//   },
//   {
//     image:
//       "https://www.my-efoy.com/wp-content/uploads/sites/8/efoy-efoypro-design-award.png",
//   },
//   {
//     image:
//       "https://img.fuelcellsworks.com/wp-content/uploads/2020/02/efoy-pro-cube-BOS-Radio-stations.png",
//   },
//   {
//     image:
//       "https://orizonmobile.com/wp-content/uploads/2019/10/efoy-pro-technique-1200x469.png",
//   },
//   {
//     image:
//       "https://www.sfc-energy.ca/wp-content/uploads/sites/11/3795EFOY-Pro-Hybrid-Solutions_LinkedIN-hero_a.png",
//   },
//   {
//     image:
//       "https://www.ensolsystems.com/wp-content/uploads/2019/03/EFOY-Pro-Direct-Methanol-Fuel-Cells-Diagram.png",
//   },
//   {
//     image:
//       "https://www.efoy-pro.com/wp-content/uploads/sites/10/H2Genset_Funktionsgrafik_EN-800x500-1.jpg",
//   },
// ];

const content = [
  {
    image: AERTRAX,
  },
  {
    image: EfoyPro900,
  },
  {
    image: EfoyPro1800,
  },
  {
    image: EfoyPro2800,
  },
  {
    image: M10,
  },
  {
    image: M28,
  },
  {
    image: MT60,
  },
];

function AnimatedSlider() {
  return (
    <>
      <Slider autoplay={1200} infinite="true">
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}') no-repeat center`,
            }}
            className="responsive-image"
          ></div>
        ))}
      </Slider>
    </>
  );
}
// no-repeat center center
export default AnimatedSlider;
