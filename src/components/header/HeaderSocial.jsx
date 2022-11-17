import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
