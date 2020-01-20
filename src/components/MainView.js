import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./HomPage/Homepage";
import { LoginPage } from "./LoginPage/LoginPage";

export function MainView() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}
