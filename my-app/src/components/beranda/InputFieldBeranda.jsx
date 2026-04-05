import React from "react"; 
import "../beranda/style/TambahFilm.css"

function InputField({ label, type, placeholder }) {
  return (
    <>
    <div className="InputField">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      <br />
    </div>
    </>
  );
}

export default InputField;