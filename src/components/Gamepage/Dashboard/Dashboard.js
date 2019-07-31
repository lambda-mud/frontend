import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    //   const players = this.props.players

    const players = [this.props.players];
    console.log(players);
    // const array = players.map(player => player)
    return (
      <div             >
        {/* player info */}
        <div>
          <h3>Player Info</h3>
          <div
            style={{
              display: "flex",
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
              <h3>$1000</h3>
            </div>
          </div>
        </div>
        {/* Other players in this location */}
        <div>
          <h3>Players in this State</h3>
          {/* {this.players} */}
          <p>irving</p>
        </div>
        {/* actions */}
        <div>
          <div>
            <h2>Actions:</h2>
            <p>stuff</p>
            <p>stuff</p>
            <p>stuff</p>
          </div>
          <div>
            <input />
            <button>Do</button>
          </div>
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
