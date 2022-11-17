import React from "react";
import "./services.css";
import { BiCheckCircle } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Que ofrecemos</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </article>
      {/*   Termina UI/UX */}
      <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </article>

       {/*  TERMINA WEB DEVELOPMENT */}

       <article className="service">
          <div className="service__head">
            <h3>CONTENIDOS</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.e</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <BiCheckCircle className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </article>
       {/*  TERMINA CONTENIDOS */}
      </div>
    </section>
  );
};

export default Services;
