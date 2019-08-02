import React, { Component } from "react";
import LocationMap from "./GoogleMap/Map";
import axios from "axios";
import Dashboard from "./Dashboard/Dashboard";
import FullMapButton from "./GoogleMap/material-ui/fullmapbutton";

export default class GamePage extends Component {
  state = {
    uuid: "",
    title: "",
    name: "",
    description: "",
    direction: "",
    players: "",
    cash: "",
    rooms: [],
    disableButton: false,
    currentRoom: []
  };

  componentDidMount() {
    const axiosconfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    axios
      .get(
        "https://django-mud-backend.herokuapp.com/api/adv/init/",
        axiosconfig
      )
      .then(res => {
        console.log(res.data);
        localStorage.setItem("location", res.data.title);
        this.setState({
          uuid: res.data.uuid,
          title: res.data.title,
          name: res.data.name,
          cash: res.data.cash,
          description: res.data.description,
          players: res.data.players
        });
        if (this.state.cash <= 0) {
          this.setState({
            disableButton: true
          });
        }
      })
      // .then(
      //   this.setState({
      //     currentRoom: this.state.rooms.filter(e => e.title === this.state.title)
      //   })
      //   )
      // .then(
      //   // this.state.rooms.filter(e => {
      //   //   if (e.title === this.state.title) {
      //   //     this.setState({
      //   //       hello: "hello"
      //   //     })
      //   //   }
      //   // })
      //   this.currentRoom
      // )
      .catch(err => console.log(err));

    axios
      .get(
        "https://django-mud-backend.herokuapp.com/api/adv/rooms/",
        axiosconfig
      )
      .then(res => {
        console.log(res.data.rooms);
        this.setState({
          rooms: res.data.rooms,
          currentRoom: res.data.rooms.filter(e => e.title === this.state.title)
        });
      })
      .then(
        this.setState({
          currentRoom: this.state.rooms.filter(
            e => e.title === this.state.title
          )
        })
      )
      .catch(err => console.log(err));
  }

  //   componentDidUpdate(){
  //     if (this.state.cash <= 0) {
  //       this.setState({
  //         disableButton: true
  //       })
  //     }
  // }

  // currentRoom = () => {
  //  this.state.rooms.filter(e => {
  //    if (e.title === this.state.title) {
  //      this.setState({
  //        hello: "hello"
  //      })
  //    }
  //  })

  // };

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

  moneyTransaction = (e, prevState) => {
    const axiosconfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    axios
      .put(
        "https://django-mud-backend.herokuapp.com/api/adv/add_money/",
        { money: parseFloat(e.target.value) },
        axiosconfig
      )
      .then(res => {
        this.setState({
          cash: res.data.cash
        });
        if (this.state.cash <= 0) {
          alert("GAME OVER, you need to start again");
          this.setState({
            disableButton: true
          });
        }
          alert("You just earned money!!");
          console.log("money");
      
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state);
    // console.log("currentRoom", this.state.currentRoom.map(e => e));
    // console.log(this.state.currentRoom > 0 &&
    //   this.state.currentRoom.map(room => {
    //     return <div>{room}</div>;
    //   }))
    return (
      <div
        style={{
          display: "flex",
          margin: "auto",
          border: "solid 5px #216049",
          backgroundColor: "#ACC7CD",
          borderRadius: "10px",
          overflow: "hidden",
          height: "800px"
        }}
      >
        <div style={{ width: "30%", height: "70vh" }}>
          <div style={{ height: "80%", padding: "13px" }}>
            <Dashboard
              sendRequest={this.sendRequest}
              uuid={this.state.uuid}
              title={this.state.title}
              name={this.state.name}
              players={this.state.players}
              cash={this.state.cash}
              moneyTransaction={this.moneyTransaction}
              rooms={this.state.rooms}
              disableButton={this.state.disableButton}
              currentRoom={this.state.currentRoom}
            />
          </div>
        </div>
        <div style={{ width: "70%", height: "70vh" }}>
          {/* <div style={{ width: "70%", height: "80vh" }}> */}
          <div
            style={{
              width: "100%",
              height: "80%",
              borderLeft: "solid 5px #216049",
              borderBottom: "solid 5px #216049"
            }}
          >
            <LocationMap rooms={this.state.rooms} />
          </div>
          <div
            style={{
              width: "100%",
              height: "20%",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <FullMapButton rooms={this.state.rooms} />
            <div>
              <h2>About {this.state.title}</h2>
              <p>{this.state.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
