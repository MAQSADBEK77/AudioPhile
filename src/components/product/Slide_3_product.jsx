import { Link } from "react-router-dom";
import "./slide3.css";
import See_button from "../See_button";
function Slide_3_product({ img1, img2, img3, to1, to2, to3, p1, p2, p3 }) {
  return (
    <div className="slide_pro">
      <div className="card-slide_pro">
        <div>
        <img src={img1} />
        </div>
        <h2 className="h2-1">{p1}</h2>
        <div className="button-1">
          <See_button to={to1} />
        </div>
      </div>
      <div className="card-slide_pro">
        <div>
        <img src={img2} />
        </div>
        <h2 className="h2-2">{p2}</h2>
        <div className="button-2">
          <See_button to={to2} />
        </div>
      </div>
      <div className="card-slide_pro">
        <div>
        <img src={img3} />
        </div>
        <h2 className="h2-3">{p3}</h2>
        <div className="button-3">
          <See_button to={to3} />
        </div>
      </div>
    </div>
  );
}

export default Slide_3_product;
