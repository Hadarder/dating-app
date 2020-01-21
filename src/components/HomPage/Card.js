import React from "react";
import "./card.css";


export function Card({ user: {firstName, lastName, age, image} }) {
  return (
    <div className="card">
      <img className="pic" src={image} alt="user profile" />
      <div className="nameandage">
        {firstName} {lastName}<br />
        {age}
      </div>
    </div>
  );
}
