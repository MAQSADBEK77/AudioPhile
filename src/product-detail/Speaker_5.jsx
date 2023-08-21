import "./product.css";
import ProductCart from "../components/ProductCart";
import CardText from "../components/product/CardText";
import xx99 from "../img/xx99-cart.png";
import Studio from "../components/product/Studio";
import ProductImg from "../img/pruduct5-1.png";
import ProductImg2 from "../img/pruduct5-2.png";
import ProductImg3 from "../img/pruduct5-3.png";
import Slide_3_product from "../components/product/Slide_3_product";
import xx99_1 from "../img/xx99_1.png";
import xx59 from "../img/xx59.png";
import zx9 from "../img/zx9.png";
import zx7 from "../img/zx7.png";
function Speaker_4() {
  return (
    <>
      <ProductCart
        img={zx7}
        span=""
        h6="ZX7 SPEAKER"
        p="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        coin="3.5"
      />
      <CardText
        p_left="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
        x1="2x"
        x2="2x"
        x3="1x"
        x4="1x"
        x5="1x"
        x1_text="Speaker Unit"
        x2_text="Speaker Cloth Panel"
        x3_text="User Manual"
        x4_text="3.5mm 7.5m Audio Cable"
        x5_text="7.5m Optical Cable"
      />
      <Studio img1={ProductImg} img2={ProductImg2} img3={ProductImg3} />
      <h1 className="product-you">you may also like</h1>
      <Slide_3_product
        img1={zx7}
        img2={xx99_1}
        img3={xx59}
        p1="ZX9 SPEAKER"
        p2="XX99 MARK I"
        p3="XX59"
        to1="/product/zx9"
        to2="/product/xx99"
        to3="/product/xx59"
      />
    </>
  );
}

export default Speaker_4;
