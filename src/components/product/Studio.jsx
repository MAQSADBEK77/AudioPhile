import React from "react";

function Studio({img1, img2, img3}) {
  return (
    <div className="studio">
      <div className="studio-left">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className="studio-right">
        <img src={img3} alt="" />
      </div>
    </div>
  );
}

export default Studio;
