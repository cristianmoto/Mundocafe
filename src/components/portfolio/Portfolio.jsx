import React from "react";
import "./portfolio.css";

import data from "../../Data/data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Amamos el cafe</h5>
      <h2>Cafeteras y accesorios</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, tipo, venta }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="maquina de cafe" />
              </div>
              <h3>Maquinas de cafe</h3>
              <p>[{tipo}]</p>
              <div className="portfolio__item-cta">
                <a href={venta} className="btn">
                  Comprar
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
