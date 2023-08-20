import Cards from "../components/Cards";
import Cards_to from "../components/Cards_to";
import ManHeadphone from "../components/ManHeadphone";
import Slide_3 from "../components/Slide_3";
import xx99_2 from "../img/xx99-2.png";
import xx99_1 from "../img/xx99_1.png";
import xx59 from "../img/xx59.png";
import "./uniphones.css";
function HeadPhones() {
  return (
    <div className="uniphones">
      <div className="uniphones-top">
        <h1>HEADPHONES</h1>
      </div>
      <Cards
        img={xx99_2}
        span="NEW PRODUCT"
        h6="XX99 Mark IIHeadphones"
        p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        to="/product/xx99"
      />
      <Cards_to
        img={xx99_1}
        span=""
        h6="XX99 Mark IHeadphones"
        p="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        to="/product/xx991"
      />
      <Cards
        img={xx59}
        span=""
        h6="XX59 Headphones"
        p="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        to="/product/xx59"
      />
      <Slide_3 />
      <ManHeadphone />
    </div>
  );
}

export default HeadPhones;
