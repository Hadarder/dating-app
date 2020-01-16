import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBar } from "./components/AppBar/AppBar";
import { MainView } from "./components/MainView";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <AppBar />
        <MainView />
      </Router>
    </ReduxProvider>
  );
}

export default App;
