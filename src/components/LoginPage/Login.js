import React, { useState } from "react";
import "./form.css";
import { useAction } from "../../redux/useAction";
import { userActions } from "../../redux/user";
import { useHistory } from "react-router-dom";
import { getLoggedUserData } from "../../data/dataManager";

export function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = userName.length === 0 || password.length === 0;
  const loginUser = useAction(userActions.saveUser);
  const history = useHistory();

  async function onSubmit(username, password) {
    const user = await getLoggedUserData(username, password);
    if (user) {
      loginUser(user);
      history.push("/");
    } else {
      alert("username or password is incorrect :(");
    }
  }

  return (
    <div className="loginform">
      <h2>Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
}

