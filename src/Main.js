import React from "react";
import "./Main.css";

const Main = ({ name, age }) => {
  return (
    <div className="myStyle">
      Hello <strong className="name">{name}</strong>
      <br></br>
      My age : {age + 2}
    </div>
  );
};

export default Main;
