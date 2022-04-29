import React from "react";
import ReactDOM from "react-dom/client";
import "./MediaCard.css";

const MediaCard = ({ title, body, imageUrl }) => (
  <div id="main-container">
    <h1>{title}</h1>
    <p>{body}</p>
    <img src={imageUrl} id="my-photo"></img>
    <p>I am creating this using React</p>
    <br />
    <p>I am very excited to learn React</p>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediaCard
      title="Portfolio"
      body="Hello! My Name is M.Jamshaid Ghaffar"
      imageUrl={require("./jamshaid.jpg")}
      className="MediaCard.css"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
