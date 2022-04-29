import React, { useState } from "react";
import MediaCard from "./MediaCard";
import "./MediaCard.css";
import "./Main.css";

import Button from "./Button";

function Main() {
  let [theme, setTheme] = useState("white");
  let [followers, setFollowers] = useState(0);
  let IncDecBtnStyle = {
    transform: "skew(0deg)",
    borderRadius: "7rem",
    width: "5rem",
    height: "5rem",
    padding: "1rem",
  };
  return (
    <div id="body" className={`theme-${theme}`}>
      <div id="main-container">
        <MediaCard
          title="Portfolio"
          body="Hello! My Name is M.Jamshaid Ghaffar"
          imageUrl={require("./jamshaid.jpg")}
          className="MediaCard.css"
        />
        <label id="btn-theme-label">Theme</label>
        <Button
          name="Black"
          func={() => {
            setTheme("black");
            console.log("button pressed  ", theme);
          }}
          theme={theme}
        />
        <Button
          name="White"
          func={() => {
            setTheme("white");
            console.log("button pressed  ", theme);
          }}
          theme={theme}
        />
        <label id="label-followers">Followers : {followers}</label>
        <Button
          name="+"
          func={() => {
            setFollowers(++followers);
          }}
          theme={theme}
          styling={IncDecBtnStyle}
        />

        <Button
          name="-"
          func={() => {
            setFollowers(followers <= 0 ? 0 : --followers);
          }}
          theme={theme}
          styling={IncDecBtnStyle}
        />
      </div>
    </div>
  );
}

export default Main;
