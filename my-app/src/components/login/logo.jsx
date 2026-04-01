import React from "react";
import logo from "../../../public/Login-img.jpg";

function Logo() {
  return (
    <p className="judul">
      <img className="logo-login" src={logo} alt="logo" /> CHILL
    </p>
  );
}

export default Logo;