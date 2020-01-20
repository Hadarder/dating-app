import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function AppBar() {
  const user = useSelector(({ user }) => user);
  return (
    <div className="appBar">
      <Link className="homepage_link" to="/">
        Dating App
      </Link>
      {displayLoginOrLoggedUserName(user)}
    </div>
  );
}

function displayLoginOrLoggedUserName({ username }) {
  return username.length === 0 ? (
    <Link className="link" to="/login">
      login
    </Link>
  ) : (
    <Link className="link" to="/profile">
      {`Hello, ${username}`}
    </Link>
  );
}
