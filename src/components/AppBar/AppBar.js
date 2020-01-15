import React from "react";
import "./style.css";
import {Link} from 'react-router-dom'

export function AppBar() {
  return (
    <div className="appBar">
      <Link className="homepage_link" to="/">Dating App</Link>
      <Link className="link" to="/login">login</Link>
    </div>
  );
}
