import { Link } from "react-router-dom";
import "./slide_3.css";
import xx99 from "../img/xx99_1.png";
import zx9 from "../img/zx9.png";
import yx1 from "../img/yx1.png";
function Slide_3() {
  const handleClick = (event) => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="slide">
      <div className="card-slide">
        <img className="img1" src={xx99} />
        <h2>HEADPHONES</h2>
        <Link onClick={handleClick} to="/headphones">
          Shop{""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none">
            <path
              d="M1.3219 1L6.3219 6L1.3219 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
      <div className="card-slide">
        <img className="img2" src={zx9} />
        <h2>SPEAKERS</h2>
        <Link onClick={handleClick} to="/speakers">
          Shop{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none">
            <path
              d="M1.3219 1L6.3219 6L1.3219 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
      <div className="card-slide">
        <img className="img3" src={yx1} />
        <h2 className="three-h2">EARPHONES</h2>
        <Link onClick={handleClick} className="three-a" to="/earphones">
          Shop{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none">
            <path
              d="M1.3219 1L6.3219 6L1.3219 11"
              stroke="#D87D4A"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Slide_3;
