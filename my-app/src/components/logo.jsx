import React from "react";
import logo from "/public/movie-open.png";

function Logo() {
  return (
    <p className="judul">
      <img className="logo-login" src={logo} alt="logo" /> CHILL
    </p>
  );
}

export default Logo;