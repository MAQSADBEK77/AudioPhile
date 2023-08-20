import Cards from "../components/Cards";
import Cards_to from "../components/Cards_to";
import ManHeadphone from "../components/ManHeadphone";
import Slide_3 from "../components/Slide_3";
import yx1 from "../img/yx1.png";
import zx7 from "../img/zx7.png";
import "./uniphones.css";
function Speakers() {
  return (
    <div className="uniphones">
      <div className="uniphones-top">
        <h1>EARPHONES</h1>
      </div>
      <Cards
        img={yx1}
        span="NEW PRODUCT"
        h6="YX1 WIRELESS EARPHONES"
        p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        to="/product/yx1"
      />
      <Slide_3 />
      <ManHeadphone />
    </div>
  );
}

export default Speakers;
