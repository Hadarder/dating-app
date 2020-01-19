import React, { useState } from "react";
import "./form.css";

export function Form({ buttonTitle, onSubmit }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = userName.length === 0 || password.length === 0;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setUsername("");
        setPassword("");
        onSubmit(userName, password);
      }}
    >
      <div className="input">
        User:
        <input
          required
          onChange={e => setUsername(e.target.value)}
          value={userName}
        />
      </div>
      <div className="input">
        Password:
        <input
          type="password"
          required
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button className="button" disabled={isValid}>
        {buttonTitle}
      </button>
    </form>
  );
}
