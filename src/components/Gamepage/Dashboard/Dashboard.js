import React, { Component } from "react";
import "./index.css"

export default class Dashboard extends Component {
  render() {
    const players = [this.props.players];
    // console.log(players);

    return (
      <div>
        {/* player info */}
        <div>
          <h3>Player Info</h3>
          <div
            style={{
              display: "flex"
            }}
          >
            <div style={{ width: "80%" }}>
              <p>Welcome back {this.props.name}!</p>
              <p style={{ paddingBottom: "30px" }}>
                {/* Current Location: <br /> */}
                <i class="fas location fa-location-arrow"></i>
                {this.props.title}
              </p>
            </div>
            <div className="money">
              <i className="fas fa-money-bill-wave"></i>

              <h3>{this.props.cash}</h3>

          </div>
        </div>
        {/* Other players in this location */}
        <div>
          <h3>Players in this State</h3>
          <hr />
          {/* {this.players} */}
          {this.props.players.length > 0 &&
            this.props.players.map(player => {
              return <div>{player}</div>;
            })} 
        </div>
        {/* actions */}
        <div>
          <div>
            <h2>Actions:</h2>
            <div style={{ display: "flex", justifyContent:"space-between" }}>
              <p>Someone needs a HTML website for $400</p>
              <button
                name="job"
                value="400"
                onClick={this.props.moneyTransaction}
              >
                build
              </button>
            </div>
            <div style={{ display: "flex", justifyContent:"space-between" }}>
              <p>4 Star resturant -$100</p>
              <button
                name="job"
                value="-100"
                onClick={this.props.moneyTransaction}
              >
                eat
              </button>
            </div>
            <div style={{ display: "flex", justifyContent:"space-between" }}>
              <p>Pizza -$4</p>
              <button
                name="job"
                value="-4"
                onClick={this.props.moneyTransaction}
              >
                eat
              </button>
            </div>
            {/* <p>stuff</p>
            <p>stuff</p> */}
          </div>
          {/* <div>
            <input />
            <button>Do</button>
          </div> */}
        </div>
        {/* move direction buttons */}
        <h2>Where to next?</h2>
        <div className="directionContainer">
          <button className="direction ns" name="n" value="n" onClick={this.props.sendRequest}>
            N
          </button>
          <br></br>
          <button className="direction" name="w" value="w" onClick={this.props.sendRequest}>
            W
          </button>
          <button className="direction" name="e" value="e" onClick={this.props.sendRequest}>
            E
          </button>
          <br></br>
          <button className="direction ns" name="s" value="s" onClick={this.props.sendRequest}>
            S
          </button>
        </div>
       </div>
      </div>
    );
  }
}
