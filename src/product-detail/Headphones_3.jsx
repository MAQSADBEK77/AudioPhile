import "./product.css";
import ProductCart from "../components/ProductCart";
import CardText from "../components/product/CardText";
import xx99 from "../img/xx99-cart.png";
import Studio from "../components/product/Studio";
import ProductImg from "../img/pruduct3-1.png";
import ProductImg2 from "../img/pruduct3-2.png";
import ProductImg3 from "../img/pruduct3-3.png";
import Slide_3_product from "../components/product/Slide_3_product";
import xx99_1 from "../img/xx99_1.png";
import xx59 from "../img/xx59.png";
import zx9 from "../img/zx9.png";
function Headphones_3() {
  return (
    <>
      <ProductCart
        img={xx59}
        span=""
        h6="XX59 Headphones"
        p="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        coin="899"
      />
      <CardText
        p_left="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.


More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
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
        img2={xx99_1}
        img3={zx9}
        p1="XX99 MARK II"
        p2="XX99 MARK I"
        p3="XX99 MARK I"
        to1="/product/xx99"
        to2="/product/xx59"
        to3="/product/zx9"
      />
    </>
  );
}

export default Headphones_3;
