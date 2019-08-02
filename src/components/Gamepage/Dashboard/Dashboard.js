import React, { Component } from "react";
import "./index.css";

export default class Dashboard extends Component {
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  buttonStyle = { color: "white", minWidth: "80px" };

  directionDisabled = element => {
    if (element === 0) {
      return true;
    }
  };

  directionHeader = () => {
    if (this.props.disableButton === true) {
      return <h2>You need gas money to travel!</h2>;
    } else {
      return <h2>Where to next?</h2>;
    }
  };

  canWork = () => {
    const webJob = Math.floor(this.getRandomArbitrary(90, 500));
    if (this.props.currentRoom.map(e => e.can_make_money)[0] === true) {
      return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Someone needs a HTML website for ${webJob}</p>
          <button
            name="job"
            value={webJob}
            onClick={this.props.moneyTransaction}
            className="authButton build"
            style={{ color: "white", minWidth: "80px" }}
          >
            Build
          </button>
        </div>
      );
    } else {
      return "";
    }
  };

  render() {
    // const players = [this.props.players];
    // console.log(players);
    const north = this.props.currentRoom.map(e => e.n_to)[0];
    const west = this.props.currentRoom.map(e => e.w_to)[0];
    const south = this.props.currentRoom.map(e => e.s_to)[0];
    const east = this.props.currentRoom.map(e => e.e_to)[0];
    const canmakemoney = this.props.currentRoom.map(e => e.can_make_money)[0];
    console.log("north", north, this.directionDisabled(north));
    console.log("west", west, this.directionDisabled(west));
    console.log("south", south, this.directionDisabled(south));
    console.log("east", east, this.directionDisabled(east));

    // const webJob = Math.floor(this.getRandomArbitrary(90, 500));

    console.log(canmakemoney);

    return (
      <div>
        <div>
          {/* {this.directionDisabled(this.props.currentRoom.map(e => e.w_to))} */}
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
                <i class="fas location fa-location-arrow" />
                {this.props.title}
              </p>
            </div>
            <div className="money">
              <i className="fas fa-money-bill-wave" />

              <h3>{this.props.cash}</h3>
            </div>
          </div>
          {/* Other players in this location */}
          <div>
            <hr />
            <h3>Players in this State</h3>
            {/* {this.players} */}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {this.props.players.length > 0 &&
                this.props.players.map(player => {
                  return <div style={{ margin: "0 3px" }}>{player}</div>;
                })}
            </div>
          </div>
          {/* actions */}
          <div>
            <div>
              <h2>Actions:</h2>
              {this.canWork()}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>4 Star resturant -$100</p>
                <button
                  name="job"
                  value="-100"
                  onClick={this.props.moneyTransaction}
                  className="authButton eat"
                  style={{ color: "white", minWidth: "80px" }}
                  disabled={this.props.disableButton}
                >
                  Eat
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Pizza -$4</p>
                <button
                  name="job"
                  value="-4"
                  onClick={this.props.moneyTransaction}
                  className="authButton eat"
                  style={{ color: "white", minWidth: "80px" }}
                  disabled={this.props.disableButton}
                >
                  Eat
                </button>
              </div>
              {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Someone needs a HTML website for $1000</p>
                <button
                  name="job"
                  value='1000'
                  onClick={this.props.moneyTransaction}
                  className="authButton build"
                  style={{ color: "white", minWidth: "80px" }}
                >
                  Build
                </button>
              </div> */}
            </div>
          </div>
          {/* move direction buttons */}
          {/* <h2>Where to next?</h2> */}
          {this.directionHeader()}
          <div className="directionContainer">
            <button
              className="direction ns"
              name="n"
              value="n"
              onClick={this.props.sendRequest}
              disabled={
                this.directionDisabled(north) || this.props.disableButton
              }
            >
              N
            </button>
            <br />
            <button
              className="direction"
              name="w"
              value="w"
              onClick={this.props.sendRequest}
              disabled={
                this.directionDisabled(west) || this.props.disableButton
              }
            >
              W
            </button>
            <button
              className="direction"
              name="e"
              value="e"
              onClick={this.props.sendRequest}
              disabled={
                this.directionDisabled(east) || this.props.disableButton
              }
            >
              E
            </button>
            <br />
            <button
              className="direction ns"
              name="s"
              value="s"
              onClick={this.props.sendRequest}
              disabled={
                this.directionDisabled(south) || this.props.disableButton
              }
            >
              S
            </button>
          </div>
        </div>
      </div>
    );
  }
}
