import React from "react";
import "./header.css";
import FOTO from "./Foto";
import ME from "../../assets/cafe.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Simplemente</h5>
        <h1>Café/Coffee</h1>
        <h5 className="text-light">El aroma perfecto</h5>
        <FOTO />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="cafe" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
