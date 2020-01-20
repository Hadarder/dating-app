import React from "react";
import { Form } from "./Form";
import "./form.css";
import { useAction } from "../../redux/useAction";
import { userActions } from "../../redux/user";
import { useHistory } from "react-router-dom";
import { getLoggedUserData } from "../../data/dataManager";

export function Login() {
  const loginUser = useAction(userActions.loginUser);
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
    <div className="form">
      <h2>Login</h2>
      <Form buttonTitle="Login" onSubmit={onSubmit}></Form>
    </div>
  );
}
