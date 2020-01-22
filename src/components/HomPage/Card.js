import React from "react";
import { useHistory } from "react-router-dom";
import "./card.css";

export function Card({ user: { firstName, lastName, age, profilePic } }) {
  const history = useHistory();
  function gotoUserPage() {
    history.push(`/user/${firstName}`);
  }

  return (
    <div className="card" onClick={() => gotoUserPage()}>
      <img className="pic" src={profilePic} alt="user profile" />
      <div className="nameandage">
        {firstName} {lastName}
        <br />
        {age}
      </div>
    </div>
  );
}
