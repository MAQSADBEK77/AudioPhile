import "./home.css";
import See_button from "../../components/See_button";
import Slide3 from "../../components/Slide_3";
import zx7_img from "../../img/speaker-zx7.jpg";
import zx9_img from "../../img/zx9.png";
import earphome_img from "../../img/headphone-home.svg";

import ManHeadphone from "../../components/ManHeadphone";
function Home() {
  return (
    <div className="home">
      <div className="xx99-container">
        <div className="xx99">
          <span>NEW PRODUCT</span>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <See_button to="/product/xx99" clas="home-see" />
        </div>
      </div>
      <div className="container">
        <Slide3 />
        <div className="zx9">
          <div className="zx9-left">
            <img src={zx9_img} />
          </div>
          <div className="zx9-right">
            <h3>ZX9 SPEAKER</h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <See_button to="/product/zx9" clas="speaker-see" />
          </div>
        </div>
        <div className="zx7">
          <div className="zx7-left">
            <h4>ZX7 SPEAKER</h4>
            <See_button to="/product/zx7" clas="see_speaker2" />
          </div>
          <div className="zx7-right">
            <img src={zx7_img} alt="" />
          </div>
        </div>
        <div className="earthphone-home">
          <div className="earthphone-left">
            <img cl src={earphome_img} />
          </div>
          <div className="earthphone-right">
            <div className="right-child">
              <h4>YX1 EARPHONES</h4>
              <See_button to="/product/yx1" clas="see_speaker2" />
            </div>
          </div>
        </div>
        <ManHeadphone />
      </div>
    </div>
  );
}

export default Home;
