import React from "react";
import "./nav.css";
import { GiCoffeeCup } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdRoomService } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {

 /*  uso del Hook useState para la navegacion de la pagina */
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GiCoffeeCup />
      </a>
      <a
        href="#sobre"
        onClick={() => setActiveNav("#sobre")}
        className={activeNav === "#sobre" ? "active" : ""}
      >
        <FaUserCheck />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#potfolio" ? "active" : ""}
      >
        <MdRoomService />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiContactsFill />
      </a>
    </nav>
  );
};

export default Nav;
