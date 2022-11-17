import React from "react";
import "./experience.css";
import { SiCoffeescript } from "react-icons/si";
import { GiCoffeeBeans } from "react-icons/gi";

const Experience = () => {
  return (
    <section id="experience">
      <h5> Cafes del mundo</h5>
      <h2>Sabores</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Cafes del mundo</h3>
          <div className="experience__content">
            <article className="experience_details">
              <GiCoffeeBeans />
              <div>
                <h4>Café arábica o arábigo</h4>
                <small className="text-light">
                  Grano mas consumido en el mundo, proviene de Etiopia
                </small>
              </div>
            </article>
            <article className="experience_details">
              <GiCoffeeBeans />
              <div>
                <h4>Café robusta</h4>
                <small className="text-light">
                  Arbusto mas resistente posibilita cultivo en diversos paises
                </small>
              </div>
            </article>
            <article className="experience_details">
              <GiCoffeeBeans />
              <div>
                <h4>Café libérica</h4>
                <small className="text-light">
                  Grano de sabor particular muy consumido en paises
                  escandinavos, proviene de Liberia
                </small>
              </div>
            </article>
            <article className="experience_details">
              <GiCoffeeBeans />
              <div>
                <h4>Café excelsa</h4>
                <small className="text-light">
                  Grano de calidad inferior es de consumo residual, proviene de
                  Chad
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3> Formas de prepararlo</h3>
          <div className="experience__content">
            <article className="experience_details">
              <GiCoffeeBeans />
              <div>
                <h4>Café espresso</h4>
                <small className="text-light">
                  cafe fuerte de color negro y espuma dorada
                </small>
              </div>
            </article>
            <article className="experience_details">
              <GiCoffeeBeans />
              <div>
                <h4>Café americano</h4>
                <small className="text-light">
                  Shot espresso en una taza de agua caliente
                </small>
              </div>
            </article>
            <article className="experience_details">
              <GiCoffeeBeans />
              <div>
                <h4>Café cappuccino</h4>
                <small className="text-light">
                  espresso mas leche evaporada y espuma de leche
                </small>
              </div>
            </article>
            <article className="experience_details">
              <GiCoffeeBeans />
              <div>
                <h4>Café moka (Mochachino)</h4>
                <small className="text-light">union de cafe y chocolate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
