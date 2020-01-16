import React from "react";
import { NewUser } from "./NewUser";
import { Login } from "./Login";
import './loginPage.css'

export function LoginPage() {
  return (
    <div className="loginPage">
      <NewUser />
      <Login />
    </div>
  );
}
