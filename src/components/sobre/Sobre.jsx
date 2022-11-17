import React from "react";
import "./sobre.css";
import ME from "../../assets/cafe1.png";
import { FaAward } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdCoffeeMaker } from "react-icons/md";

const Sobre = () => {
  return (
    <section id="sobre">
      <h5> Debes saber</h5>
      <h2> Hablemos de cafe</h2>

      <div className="container sobre__container">
        <div className="sobre__mi">
          <div className="sobre_mi-image">
            <img src={ME} alt="yo" />
          </div>
        </div>
        <div className="sobre__content">
          <div className="sobre__cards">
            <article className="sobre__card">
              <FaAward className="sobre__icon" />
              <h5>Cafe</h5>
              <small>granos de cafe</small>
            </article>
            <article className="sobre__card">
              <GiCoffeeBeans className="sobre__icon" />
              <h5>Blends</h5>
              <small>Diferentes tipos de semillas</small>
            </article>
            <article className="sobre__card">
              <MdCoffeeMaker className="sobre__icon" />
              <h5>Maquinas</h5>
              <small>semillas para cada maquina</small>
            </article>
          </div>
          <p>
            Cuando se habla de variedades y tipos de café no estamos hablando de
            lo mismo. La variedad se refiere al origen y especie del grano que
            se cosecha y los tipos son las bebidas que se han inventado a lo
            largo de los años con esos distintos granos. Hoy te explicaremos
            cuáles son las variedades y tipos de cafés más populares en el
            mundo.
          </p>
          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
