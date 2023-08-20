import "./cards.css";
import See_button from "./See_button";
function Cards({ img, span, h6, p, to }) {
  return (
    <div className="card">
      <div className="card-left">
        <img src={img} />
      </div>
      <div className="card-right">
        <span>{span}</span>
        <h6>{h6}</h6>
        <p>{p}</p>
        <div>
          <See_button to={to} clas="card-see" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
