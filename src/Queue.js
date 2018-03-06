import React, { Component } from "react";
import { renderQueueChart } from "./chartsLib";
import * as _ from "lodash";

class Queue extends Component {
  state = {
    data: [
      {
        company: "Ingersoll-Rand plc (Ireland)",
        daysOnQueue: 3
      },
      {
        company: "ALPS/Dorsey Wright Sector Momentum ETF",
        daysOnQueue: 30
      },
      {
        company: "Lindblad Expeditions Holdings Inc. ",
        daysOnQueue: 22
      },
      {
        company: "Zogenix, Inc.",
        daysOnQueue: 6
      },
      {
        company: "Kennedy-Wilson Holdings Inc.",
        daysOnQueue: 25
      },
      {
        company: "SunTrust Banks, Inc.",
        daysOnQueue: 21
      },
      {
        company: "First Trust RiverFront Dynamic Europe ETF",
        daysOnQueue: 27
      },
      {
        company: "Everest Re Group, Ltd.",
        daysOnQueue: 35
      },
      {
        company: "Resource Capital Corp.",
        daysOnQueue: 7
      },
      {
        company: "Cushing Renaissance Fund (The)",
        daysOnQueue: 15
      }
    ]
  };

  componentDidMount() {
    renderQueueChart(this.state.data);
  }

  render() {
    return (
      <div className="container">
        <h1>Queue</h1>
        <div
          id="chart-container"
          className={`container ${
            _.maxBy(this.state.data, d => d.daysOnQueue).daysOnQueue >= 30
              ? "container-alert"
              : ""
          }`}
        />
      </div>
    );
  }
}

export default Queue;
