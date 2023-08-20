import React from "react";

function Studio({img1, img2, img3}) {
  return (
    <div className="studio">
      <div className="item1">
        <img src={img1} alt="" />
      </div>
      <div className="item5">
        <img src={img2} alt="" />
      </div>
      <div className="item2">
        <img src={img3} alt="" />
      </div>
    </div>
  );
}

export default Studio;
