import React, { Component } from "react";
import apiClient from "./apiClient";
import { remove as removeDiacritics } from "diacritics";
import { Link } from "react-router-dom";

class Developers extends Component {
  state = { developers: [], query: "" };

  componentDidMount() {
    apiClient.getDevelopers().then(developers => this.setState({ developers }));
  }

  filterDevs = e => {
    const query = e.target.value;
    this.setState({ query });
  };

  compareStrings = (field, query) => {
    return (
      removeDiacritics(field)
        .toLocaleLowerCase()
        .indexOf(removeDiacritics(query).toLowerCase()) > -1
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2">
            <h1 className="page-header">Developers</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2">
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              onChange={this.filterDevs}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2">
            <ul style={{ listStyle: "none", padding: 0 }}>
              {this.state.developers
                .filter(
                  dev =>
                    this.compareStrings(dev.email, this.state.query) ||
                    this.compareStrings(dev.name, this.state.query)
                )
                .map((dev, i) => (
                  <li
                    key={i}
                    style={{
                      borderBottom: "1px solid #ccc",
                      padding: "5px",
                      marginBottom: "5px"
                    }}
                  >
                    <div>
                      <Link to={`developers/${dev.email}`}>{dev.name}</Link>
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

export default Developers;
