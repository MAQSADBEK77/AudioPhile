import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../components/cards.css";
import ManHeadphone from "../components/ManHeadphone";
import Slide_3 from "../components/Slide_3";
function Headphones_1() {
  return (
    <div className="products">
      <NavLink className="goback" to="/">
        Go Back
      </NavLink>
      <main>
        <Outlet />
      </main>
      <div className="foter">
        <Slide_3 />
        <ManHeadphone />
      </div>
    </div>
  );
}

export default Headphones_1;
