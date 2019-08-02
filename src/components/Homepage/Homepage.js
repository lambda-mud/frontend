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
        <div className="info">
          <h1>Welcome to Lambda Roadtrip!</h1>
          <p>You're a web developer who FINALLY has some time off so you decide to travel the United States! You can spend money travelling and eating. However, you'll cut your trip short by running out of money, so keep your vacation alive by doing some freelancing!</p>
        </div>
      </div>
    );
  }
}
