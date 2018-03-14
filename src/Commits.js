import React, { Component } from "react";
import apiClient from "./apiClient";

class Commits extends Component {
  state = { developers: [] };

  componentDidMount() {
    apiClient.getDevelopers().then(developers => this.setState({ developers }));
  }

  render() {
    return (
      <div className="container">
        <h1>Commits</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.state.developers.map((dev, i) => (
            <li
              key={i}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "5px",
                marginBottom: "5px"
              }}
            >
              <div>
                <a href="">{dev.name}</a>
              </div>
              <div style={{ fontSize: "0.8rem", color: "#999" }}>
                {dev.email}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Commits;
