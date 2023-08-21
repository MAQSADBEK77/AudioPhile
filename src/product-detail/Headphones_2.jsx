import "./product.css";
import ProductCart from "../components/ProductCart";
import CardText from "../components/product/CardText";
import xx99 from "../img/xx99-cart.png";
import Studio from "../components/product/Studio";
import ProductImg from "../img/pruduct2-1.png";
import ProductImg2 from "../img/pruduct2-2.png";
import ProductImg3 from "../img/pruduct2-3.png";
import Slide_3_product from "../components/product/Slide_3_product";
import xx99_1 from "../img/xx99_1.png";
import xx59 from "../img/xx59.png";
import zx9 from "../img/zx9.png";
function Headphones_2() {
  return (
    <>
      <ProductCart
        img={xx99_1}
        span=""
        h6="XX99 Mark I Headphones"
        p="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. "
        coin="1.750"
      />
      <CardText
        p_left="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.

From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
        x1="1x"
        x2="2x"
        x3="1x"
        x4="1x"
        x1_text="Headphone Unit"
        x2_text="Replacement Earcups"
        x3_text="User Manual"
        x4_text="3.5mm 5m Audio Cable"
      />
      <Studio img1={ProductImg} img2={ProductImg2} img3={ProductImg3} />
      <h1 className="product-you">you may also like</h1>
      <Slide_3_product
        img1={xx99}
        img2={xx59}
        img3={zx9}
        p1="XX99 MARK II"
        p2="XX59"
        p3="ZX9 SPEAKER"
        to1="/product/xx99"
        to2="/product/xx59"
        to3="/product/zx9"
      />
    </>
  );
}

export default Headphones_2;
