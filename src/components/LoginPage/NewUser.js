import React, { useState } from "react";
import "./form.css";
import { useHistory } from "react-router-dom";
import { useAction } from "../../redux/useAction";
import { userActions } from "../../redux/user";
import { addUser } from "../../data/dataManager";

export function NewUser() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const isValid = userName.length === 0 || password.length === 0 || repeatPassword.length === 0;

  const registerUser = useAction(userActions.saveUser);
  const history = useHistory();

  async function onSubmit(username, password) {
    if (alertIfPasswordsNotEquls()){
      return;
    }
    const newUser = await addUser(username, password);
    if (newUser) {
      registerUser(newUser);
      history.push("/");
    } else {
      alert("username is already taken :(");
    }
  }

  function checkPasswords() {
    return password === repeatPassword;
  }

  function alertIfPasswordsNotEquls() {
    if (!checkPasswords()) {
      alert("passwords do not match, please reenter");
      return true;
    }
    return false;
  }

  return (
    <div className="loginform">
      <h2>New User</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          setUsername("");
          setPassword("");
          setRepeatPassword("");
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
        <div className="input">
          Password:
          <input
            type="password"
            required
            onChange={e => setRepeatPassword(e.target.value)}
            value={repeatPassword}
          />
        </div>
        <button className="button" disabled={isValid}>
          Register
        </button>
      </form>
    </div>
  );
}
