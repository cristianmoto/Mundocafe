import React from "react";
import "./header.css";
import FOTO from "./Foto";
/* import ME from "../../assets/cafe.png"; */
import ME from "../../assets/grano.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Mundo Cafe </h1>
        <h5 className="text-light">El aroma perfecto</h5>
        <FOTO />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="cafe" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
