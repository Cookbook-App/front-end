import React from "react";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/SignUp" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
