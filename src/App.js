import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Queu from "./Queu";
import Churn from "./Churn";
import Commits from "./Commits";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container nav-links">
            <Link to="/">Home</Link>
            <Link to="/queu">Queu</Link>
            <Link to="/churn">Churn</Link>
            <Link to="/commits">Commits</Link>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/queu" component={Queu} />
          <Route path="/churn" component={Churn} />
          <Route path="/commits" component={Commits} />
        </div>
      </Router>
    );
  }
}

export default App;
