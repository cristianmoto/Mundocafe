import React from "react";
import "./header.css";
import FOTO from "./Foto";
import ME from "../../assets/cafe.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> hello</h5>
        <h1>cafe para todos</h1>
        <h5 className="text-light">Fullstack Developer</h5>
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
