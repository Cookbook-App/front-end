import React from "react";
import Login from "./components/Login";
import DashNav from "./components/DashNav";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={DashNav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
