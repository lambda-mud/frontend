import React, { Component } from "react";
import Tripgif from "./roadtrip.gif";
import "./index.css";
export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div className="tablet">
          <div className="img-container">
            <img src={Tripgif} alt="" className="roadtripimg" />
          </div>
        </div>
      </div>
    );
  }
}
