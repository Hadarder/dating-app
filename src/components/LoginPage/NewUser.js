import React from "react";
import { Form } from "./Form";
import "./form.css";
import {useHistory} from "react-router-dom"
import { useAction } from "../../redux/useAction";
import { userActions } from "../../redux/user";

export function NewUser() {
  const registerUser = useAction(userActions.registerUser);
  const history = useHistory();
  const onSubmit = (username, password) => {
    registerUser({ username, password });
    history.push("/");
  };
  return (
    <div className="form">
      <h2>New User</h2>
      <Form buttonTitle="Register" onSubmit={onSubmit} />
    </div>
  );
}
