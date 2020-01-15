import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from './HomPage/Homepage'

export function MainView() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
}
