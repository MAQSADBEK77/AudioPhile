import "./manHeadphone.css";
import man_img from "../img/man_headphone.jpg";
function ManHeadphone() {
  return (
    <div className="manheadphone">
      <div className="left-man">
        <h5>
          Bringing you the <span>best</span> audio gear
        </h5>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="right-man">
        <img src={man_img} alt="" />
      </div>
    </div>
  );
}

export default ManHeadphone;
