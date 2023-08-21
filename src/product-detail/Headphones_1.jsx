import "./product.css";
import ProductCart from "../components/ProductCart";
import CardText from "../components/product/CardText";
import xx99 from "../img/xx99-cart.png";
import Studio from "../components/product/Studio";
import Man_img from "../img/man_headphone.jpg";
import ProductImg from "../img/pruduct1-2.png";
import ProductImg3 from "../img/pruduct1-3.png";
import Slide_3_product from "../components/product/Slide_3_product";
import xx99_1 from "../img/xx99_1.png";
import xx59 from "../img/xx59.png";
import zx9 from "../img/zx9.png";
function Headphones_1() {
  return (
    <>
      <ProductCart
        img={xx99}
        span="NEW PRODUCT"
        h6="XX99 Mark II Headphones"
        p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        coin="2.999"
      />
      <CardText
        p_left="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
        x1="1x"
        x2="2x"
        x3="1x"
        x4="1x"
        x5="1x"
        x1_text="Headphone Unit"
        x2_text="Replacement Earcups"
        x3_text="User Manual"
        x4_text="3.5mm 5m Audio Cable"
        x5_text="Travel Bag"
      />
      <Studio img1={Man_img} img2={ProductImg} img3={ProductImg3} />
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

export default Headphones_1;
