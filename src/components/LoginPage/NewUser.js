import React from "react";
import { Form } from "./Form";
import "./form.css";

export function NewUser() {
  const onSubmit = (userName, password) => {};
  return (
    <div className="form">
      <h2>New User</h2>
      <Form buttonTitle="Register" onSubmit={onSubmit} />
    </div>
  );
}
