import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export function AppBar() {
  const [serach, setSearch] = useState("");
  const user = useSelector(({ user }) => user);
  const history = useHistory();

  function onKeyDown(event) {
    if (event.keyCode === 13) {
      history.push(`/search/${serach}`);
    }
  }

  function displayLoginOrLoggedUserName({ username }) {
    return username.length === 0 ? (
      <Link className="link" to="/login">
        login
      </Link>
    ) : (
      <div className="searchandname">
        <input
          className="search"
          type="text"
          placeholder="search"
          onChange={e => {
            setSearch(e.target.value);
          }}
          onKeyDown={e => onKeyDown(e)}
        />
        <Link className="link" to="/profile">
          {`Hello, ${username}`}
        </Link>
      </div>
    );
  }

  return (
    <div className="appBar">
      <div className="logoandname">
        <Link className="homepage_link" to="/">
          Dating App
        </Link>
        <img
          className="logo"
          src="https://images.vexels.com/media/users/3/137321/isolated/preview/72838e83cb97970f18dcd02d7965c0ed-heart-logo-couple-by-vexels.png"
          alt="logo"
        />
      </div>
      {displayLoginOrLoggedUserName(user)}
    </div>
  );
}
