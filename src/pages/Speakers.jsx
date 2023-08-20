import Cards from "../components/Cards";
import Cards_to from "../components/Cards_to";
import ManHeadphone from "../components/ManHeadphone";
import Slide_3 from "../components/Slide_3";
import zx9 from "../img/zx9.png";
import zx7 from "../img/zx7.png";
import "./uniphones.css";
function Speakers() {
  return (
    <div className="uniphones">
      <div className="uniphones-top">
        <h1>SPEAKERS</h1>
      </div>
      <Cards
        img={zx9}
        span="NEW PRODUCT"
        h6="ZX9 SPEAKER"
        p="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        to="/product/zx9"
      />
      <Cards_to
        img={zx7}
        span=""
        h6="ZX7 SPEAKER"
        p="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        to="/product/zx7"
      />
      <Slide_3 />
      <ManHeadphone />
    </div>
  );
}

export default Speakers;
