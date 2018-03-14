import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Queue from "./Queue";
import Churn from "./Churn";
import Developers from "./Developers";
import DeveloperDetails from "./DeveloperDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="nav-container nav-links">
            <Link to="/">Home</Link>
            <Link to="/queue">Queue</Link>
            <Link to="/churn">Churn</Link>
            <Link to="/developers">Developers</Link>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/queue" component={Queue} />
          <Route path="/churn" component={Churn} />
          <Route exact path="/developers" component={Developers} />
          <Route path="/developers/:email" component={DeveloperDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
