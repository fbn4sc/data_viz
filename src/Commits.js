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
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <h1 style={{ textAlign: "center" }}>Commits</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <input type="text" placeholder="Email" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
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
        </div>
      </div>
    );
  }
}

export default Commits;
