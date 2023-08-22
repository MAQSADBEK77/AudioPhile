import "./cards.css";
import { useState } from "react";
function ProductCart({ img, span, h6, p, coin }) {
  const [count, setcount] = useState(1);
  function add_gadget() {
    localStorage.setItem("baskets", [
      {
        name: "xx99",
      },
      {
        piece: 2,
      },
    ]);
    console.log(localStorage.setItem("baskets"));
  }
  return (
    <div className="card">
      <div className="card-left">
        <img src={img} />
      </div>
      <div className="card-right">
        <span>{span}</span>
        <h6>{h6}</h6>
        <p>{p}</p>
        <div className="coin">
          {parseFloat(
            coin.replace(",", ".").replace(/\s/g, "") * count
          ).toFixed(3)}
        </div>
        <div className="count-block">
          <div className="count">
            <p onClick={() => (count > 1 ? setcount(count - 1) : "")}>-</p>
            <h5>{count}</h5>
            <p onClick={() => setcount(count + 1)}>+</p>
          </div>
          <button className="card-see" onClick={() => add_gadget()}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
