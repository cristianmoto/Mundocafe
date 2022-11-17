import React from "react";
import CV from "../../assets/cafe.pdf";

const Foto = () => {
  return (
    <div className="Foto">
      <a href={CV} download className="btn">
        Mas sobre el cafe (PDF)
      </a>
      <a href="#contact" className="btn btn-primary">
        Hablemos!
      </a>
    </div>
  );
};

export default Foto;
