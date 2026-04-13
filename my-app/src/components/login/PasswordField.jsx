import React from "react";

function PasswordField({ label, placeholder }) {
  return (
    <>
      <label>{label}</label>
      <div className="password-wrapper">
        <input type="password" placeholder={placeholder} />
        <i className="fa-solid fa-eye"></i>
      </div>
      <br />
    </>
  );
}

export default PasswordField;