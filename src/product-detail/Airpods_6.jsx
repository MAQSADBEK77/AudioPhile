import "./product.css";
import ProductCart from "../components/ProductCart";
import CardText from "../components/product/CardText";
import xx99 from "../img/xx99-cart.png";
import Studio from "../components/product/Studio";
import ProductImg from "../img/pruduct6-1.png";
import ProductImg2 from "../img/pruduct6-2.png";
import ProductImg3 from "../img/pruduct6-3.png";
import Slide_3_product from "../components/product/Slide_3_product";
import xx99_1 from "../img/xx99_1.png";
import xx59 from "../img/xx59.png";
import zx9 from "../img/zx9.png";
import zx7 from "../img/zx7.png";
import yx1 from '../img/yx1.png'
function Airpods_6() {
  return (
    <>
      <ProductCart
        img={yx1}
        span="NEW PRODUCT"
        h6="YX1 WIRELESS EARPHONES"
        p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        coin="599"
      />
      <CardText
        p_left="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
        x1="2x"
        x2="6x"
        x3="1x"
        x4="1x"
        x5="1x"
        x1_text="Earphone Unit"
        x2_text="Multi-size Earplugs"
        x3_text="User Manual"
        x4_text="USB-C Charging Cable"
        x5_text="Travel Pouch"
      />
      <Studio img1={ProductImg} img2={ProductImg2} img3={ProductImg3} />
      <h1 className="product-you">you may also like</h1>
      <Slide_3_product
        img1={xx99_1}
        img2={xx59}
        img3={zx9}
        p1="XX99 MARK I"
        p2="XX59"
        p3="ZX9 SPEAKER"
        to1="/product/xx99"
        to2="/product/xx59"
        to3="/product/zx9"
      />
    </>
  );
}

export default Airpods_6;
