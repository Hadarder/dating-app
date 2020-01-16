import React from "react";
import { Form } from "./Form";
import "./form.css";
import { useAction } from "../../redux/useAction";
import { userActions } from "../../redux/user";
import {useHistory} from "react-router-dom"


export function Login() {
  const loginUser = useAction(userActions.loginUser);
  const history = useHistory();
  const onSubmit = (username, password) => {
    loginUser({username,password});
    history.push("/");
  };
  return (
    <div className="form">
      <h2>Login</h2>
      <Form buttonTitle="Login" onSubmit={onSubmit} />
    </div>
  );
}
