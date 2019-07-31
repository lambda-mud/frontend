import React, { Component } from "react";
import LocationMap from "./GoogleMap/Map";
import axios from "axios";
import Dashboard from "./Dashboard/Dashboard";

export default class GamePage extends Component {
  state = {
    uuid: "",
    title: "",
    name: "",
    description: "",
    direction: "",
    players: ""
  };

  componentDidMount() {
    const axiosconfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    axios
      .get("https://django-mud-backend.herokuapp.com/api/adv/init/", axiosconfig)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("location", res.data.title);
        this.setState({
          uuid: res.data.uuid,
          title: res.data.title,
          name: res.data.name,
          description: res.data.description,
          players: res.data.players
        });
      })
      .catch(err => console.log(err));
  }

  sendRequest = e => {
    console.log(e.target.name);

    const axiosconfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    return axios
      .post(
        "https://django-mud-backend.herokuapp.com/api/adv/move/",
        { direction: e.target.name },
        axiosconfig
      )
      .then(res => {
        //   localStorage.setItem("token", `Token ${res.data.key}`);

        console.log(res.data);
        localStorage.setItem("location", res.data.title);
        window.location.reload(true);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div style={{ display: "flex", margin: "auto" }}>
        <div style={{ width: "30%", height: "90vh" }}>
          <div style={{height: "10%" }}>
            <h1> Lambda Road Trip</h1>
          </div>
          <div style={{height: "80%" }}>
          <Dashboard
            sendRequest={this.sendRequest}
            uuid={this.state.uuid}
            title={this.state.title}
            name={this.state.name}
            players={this.state.players}
          /></div>
        </div>
        <div style={{ width: "70%", height: "90vh", border: "solid red 1px" }}>
          <div style={{ width: "100%", height: "80%" }}>
            <LocationMap />
          </div>
          <div style={{ width: "100%", height: "20%" }}>
            <h2>About {this.state.title}</h2>
            <p>{this.state.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
