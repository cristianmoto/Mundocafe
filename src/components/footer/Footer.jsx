import React from "react";
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Mundo Cafe
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#sobre">Hablemos de cafe</a>
        </li>
        <li>
          <a href="#experience">Sabores</a>
        </li>
        <li>
          <a href="#portfolio">Cafeteras y Accesorios</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="http://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="http://twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Cristianmoto </small>
      </div>
    </footer>
  );
};

export default Footer;
