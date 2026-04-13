import React from "react"; 

function InputField({ label, type, placeholder }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      <br />
    </>
  );
}

export default InputField;