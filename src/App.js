import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBar } from "./components/AppBar/AppBar";
import {MainView} from './components/MainView'

function App() {
  return (
    <Router>
      <AppBar />
      <MainView />
    </Router>
  );
}

export default App;
