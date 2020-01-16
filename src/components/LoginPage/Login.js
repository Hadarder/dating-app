import React from "react";
import { Form } from "./Form";
import "./form.css";

export function Login() {
  const onSubmit = (userName, password) => {console.log(userName,password)};
  return (
    <div className="form">
      <h2>Login</h2>
      <Form buttonTitle="Login" onSubmit={onSubmit}/>
    </div>
  );
}
