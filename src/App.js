import React, { Component } from "react";
// eslint-disable-next-line
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import RedocDisplay from "./components/Main/RedocDisplay";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RedocDisplay />
      </div>
    );
  }
}

export default App;
