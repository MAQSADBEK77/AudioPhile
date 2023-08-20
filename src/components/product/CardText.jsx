function CartText({
  p_left,
  x1,
  x2,
  x3,
  x4,
  x5,
  x6,
  x1_text,
  x2_text,
  x3_text,
  x4_text,
  x5_text,
  x6_text,
}) {
  return (
    <div className="cart-text">
      <div className="text-left">
        <h2>FEATURES</h2>
        <p>{p_left}</p>
      </div>
      <div className="text-right">
        <h2>in the box</h2>
        <div className="x-text">
          <p>
            <span>{x1}</span>
            {x1_text}
          </p>
          <p>
            <span>{x2}</span>
            {x2_text}
          </p>
          <p>
            <span>{x3}</span>
            {x3_text}
          </p>
          <p>
            <span>{x4}</span>
            {x4_text}
          </p>
          <p>
            <span>{x5}</span>
            {x5_text}
          </p>
          <p>
            <span>{x6}</span>
            {x6_text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartText;
