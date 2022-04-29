import React from "react";
import "./Button.css";

const Button = ({ name, func, theme, styling }) => {
  return (
    <button
      className={`Button btn-theme-${theme}`}
      onClick={func}
      style={styling}
    >
      {name}
    </button>
  );
};

export default Button;
