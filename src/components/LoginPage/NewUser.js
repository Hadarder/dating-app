import React from "react";
import { Form } from "./Form";
import "./form.css";
import { useHistory } from "react-router-dom";
import { useAction } from "../../redux/useAction";
import { userActions } from "../../redux/user";
import { addUser } from "../../data/dataManager";

export function NewUser() {
  const registerUser = useAction(userActions.saveUser);
  const history = useHistory();

  async function onSubmit(username, password) {
    const newUser = await addUser(username, password);
    if (newUser) {
      registerUser(newUser);
      history.push("/");
    } else {
      alert("username is already taken :(");
    }
  }

  return (
    <div className="loginform">
      <h2>New User</h2>
      <Form buttonTitle="Register" onSubmit={onSubmit} />
    </div>
  );
}
