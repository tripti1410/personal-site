import React from "react";
import "./button.css";

const Button = ({ children, classes }) => {
  return (
    <button type="button" className={`button ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
