import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Schema</h1>
      </div>
    );
  }
}

export default App;
