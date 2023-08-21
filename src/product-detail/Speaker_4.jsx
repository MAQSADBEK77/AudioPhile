import "./product.css";
import ProductCart from "../components/ProductCart";
import CardText from "../components/product/CardText";
import xx99 from "../img/xx99-cart.png";
import Studio from "../components/product/Studio";
import ProductImg from "../img/pruduct4-1.png";
import ProductImg2 from "../img/pruduct4-2.png";
import ProductImg3 from "../img/pruduct4-3.png";
import Slide_3_product from "../components/product/Slide_3_product";
import xx99_1 from "../img/xx99_1.png";
import xx59 from "../img/xx59.png";
import zx9 from "../img/zx9.png";
import zx7 from "../img/zx7.png";
function Speaker_4() {
  return (
    <>
      <ProductCart
        img={zx9}
        span="NEW PRODUCT"
        h6="ZX9 SPEAKER"
        p="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        coin="4.5"
      />
      <CardText
        p_left="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
        x1="2x"
        x2="2x"
        x3="1x"
        x4="1x"
        x5="1x"
        x1_text="Speaker Unit"
        x2_text="Speaker Cloth Panel"
        x3_text="User Manual"
        x4_text="3.5mm 10m Audio Cable"
        x5_text="10m Optical Cable"
      />
      <Studio img1={ProductImg} img2={ProductImg2} img3={ProductImg3} />
      <h1 className="product-you">you may also like</h1>
      <Slide_3_product
        img1={zx7}
        img2={xx99_1}
        img3={xx59}
        p1="ZX7 SPEAKER"
        p2="XX99 MARK I"
        p3="XX59"
        to1="/product/zx7"
        to2="/product/xx99"
        to3="/product/xx59"
      />
    </>
  );
}

export default Speaker_4;
