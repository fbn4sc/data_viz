import React, { Component } from "react";
import { renderQueuChart } from "./chartsLib";

class Queu extends Component {
  componentDidMount() {
    renderQueuChart();
  }

  render() {
    return (
      <div className="container">
        <h1>Queu</h1>
        <div id="svg" className="container" />
      </div>
    );
  }
}

export default Queu;
