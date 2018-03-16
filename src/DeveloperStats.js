import React, { Component } from "react";
import apiClient from "./apiClient";
import * as _ from "lodash";
import { heatmap } from "./chartsLib";

class DeveloperStats extends Component {
  state = { commits: [] };

  componentDidMount() {
    apiClient
      .getCommits(this.props.match.params.email)
      .then(commits => this.setState({ commits }));

    heatmap("#heatmap-target", this.prepareForHeatMap(this.state.commits));
  }

  componentDidUpdate() {
    heatmap("#heatmap-target", this.prepareForHeatMap(this.state.commits));
  }

  prepareForHeatMap = data => {
    const commitObjs = data.map(commit => ({
      day: new Date(commit.commitDate).getDay(),
      hour: new Date(commit.commitDate).getHours()
    }));

    const byDayAndHour = _.groupBy(
      commitObjs,
      cObj => `${cObj.day} ${cObj.hour}`
    );

    return _.keys(byDayAndHour).map(key => ({
      day: key.split(" ")[0],
      hour: key.split(" ")[1],
      count: byDayAndHour[key].length
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2">
            <div className="page-header">
              <h1>Developer Statistics</h1>
              <small>({this.props.match.params.email})</small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2">
            <div
              id="heatmap-target"
              style={{ width: "100%", height: "200px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperStats;
