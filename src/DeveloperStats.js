import React, { Component } from "react";
import apiClient from "./apiClient";
import * as _ from "lodash";
import { histogram, renderQueueChart } from "./chartsLib";

class DeveloperStats extends Component {
  state = { commits: [] };

  componentDidMount() {
    apiClient.getCommits(this.props.match.params.email).then(commits =>
      this.setState({ commits }, () => {
        const commitsByDay = _.groupBy(this.state.commits, commit =>
          new Date(commit.commitDate).getDay()
        );

        const data = [];
        _.range(0, 7).map(
          dayOfTheWeek =>
            (data[dayOfTheWeek] = commitsByDay[dayOfTheWeek] || [])
        );

        histogram(data);
      })
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <div className="page-header">
              <h1>Developer Statistics</h1>
              <small>({this.props.match.params.email})</small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <div id="chart" style={{ width: "100%", height: "200px" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <p>chart</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <p>chart</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperStats;
