import { Link } from "react-router-dom";
function See_button({ to, clas }) {
  return (
    <Link className={clas + " see_button"} to={to}>
      See Product
    </Link>
  );
}
export default See_button;
