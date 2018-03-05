import React, { Component } from "react";
import { renderQueuChart } from "./chartsLib";
import * as _ from "lodash";

class Queu extends Component {
  state = {
    data: [
      {
        company: "Ingersoll-Rand plc (Ireland)",
        daysOnQueu: 3
      },
      {
        company: "ALPS/Dorsey Wright Sector Momentum ETF",
        daysOnQueu: 30
      },
      {
        company: "Lindblad Expeditions Holdings Inc. ",
        daysOnQueu: 22
      },
      {
        company: "Zogenix, Inc.",
        daysOnQueu: 6
      },
      {
        company: "Kennedy-Wilson Holdings Inc.",
        daysOnQueu: 25
      },
      {
        company: "SunTrust Banks, Inc.",
        daysOnQueu: 21
      },
      {
        company: "First Trust RiverFront Dynamic Europe ETF",
        daysOnQueu: 27
      },
      {
        company: "Everest Re Group, Ltd.",
        daysOnQueu: 35
      },
      {
        company: "Resource Capital Corp.",
        daysOnQueu: 7
      },
      {
        company: "Cushing Renaissance Fund (The)",
        daysOnQueu: 15
      }
    ]
  };

  componentDidMount() {
    renderQueuChart(this.state.data);
  }

  render() {
    return (
      <div className="container">
        <h1>Queu</h1>
        <div
          id="chart-container"
          className={`container ${
            _.maxBy(this.state.data, d => d.daysOnQueu).daysOnQueu >= 30
              ? "container-alert"
              : ""
          }`}
        />
      </div>
    );
  }
}

export default Queu;
