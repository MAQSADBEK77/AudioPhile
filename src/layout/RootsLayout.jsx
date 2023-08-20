import "./RootsLayout.css";
import { Outlet } from "react-router-dom";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
function RootsLayout() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="root">
      <Header menu={menu} setMenu={setMenu} />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default RootsLayout;
