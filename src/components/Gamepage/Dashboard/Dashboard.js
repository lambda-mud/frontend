import React, { Component } from "react";

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
              <p>Name: {this.props.name}</p>
              <p>
                Current Location: <br />
                {this.props.title}
              </p>
            </div>
            <div>
              <h3>${this.props.cash}</h3>
            </div>
          </div>
        </div>
        {/* Other players in this location */}
        <div>
          <h3>Players in this State</h3>
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
        <div>
          <button name="n" value="n" onClick={this.props.sendRequest}>
            North
          </button>
          <button name="s" value="s" onClick={this.props.sendRequest}>
            South
          </button>
          <button name="w" value="w" onClick={this.props.sendRequest}>
            West
          </button>
          <button name="e" value="e" onClick={this.props.sendRequest}>
            East
          </button>
        </div>
      </div>
    );
  }
}
