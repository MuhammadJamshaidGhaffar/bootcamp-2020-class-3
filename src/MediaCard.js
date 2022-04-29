import React from "react";

const MediaCard = ({ title, body, imageUrl }) => (
  <div>
    <h1>{title}</h1>
    <img src={imageUrl} id="my-photo"></img>
    <p>{body}</p>
    <p>I am creating this using React</p>
  </div>
);

export default MediaCard;
