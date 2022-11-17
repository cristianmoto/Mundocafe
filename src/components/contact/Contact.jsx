import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Nuestros Medios</h5>
      <h2>Contactanos!</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mundocafe@gmail.com</h5>
            <a href="mailto:mundocafe@gmail.com">Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <AiFillInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>@mundocafe</h5>
            <a href="www.instagram.com/mundocafe">Regalanos tu Like!</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+54 011 5555 5555</h5>
            <a href="http://api.whatsapp.com/send?phone=+541155555555">
              Enviar mensaje
            </a>
          </article>
        </div>
        {/*  fin de opciones de contacto */}
        <form action="">
          <input type="text" name="name" placeholder="Tu nombre " required />
          <input type="email" name="email" placeholder="Tu email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
