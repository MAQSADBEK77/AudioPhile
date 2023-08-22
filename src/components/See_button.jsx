import { Link } from "react-router-dom";

function See_button({ to, clas }) {
  const handleClick = (event) => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Link className={clas + " see_button"} to={to} onClick={handleClick}>
        See Product
      </Link>
    </>
  );
}

export default See_button;