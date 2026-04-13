import React from "react"; 
import "../beranda/style/TambahFilm.css"

function InputField({ label, type, placeholder,value,onChange }) {
  return (
    <>
    <div className="InputField">
      <label>{label}</label>
      <input 
        type={type}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}/>
      
      <br />
    </div>
    </>
  );
}

export default InputField;