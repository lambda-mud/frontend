import React, { Component } from "react";
import axios from "axios";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import MoveForm from "./input";
import LocationDisplay from "./locationDisplay";
// import MapComponent from './mapComponent'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline
} from "react-google-maps";
import bluemarker from "./bluemarker.png";
import redmarker from "./redmarker.png";

export default class Map extends Component {
  state = {
    title: "",
    name: "",
    description: "",
    direction: ""
  };

  componentDidMount() {
    const axiosconfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    axios
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/", axiosconfig)
      .then(res => {
        // console.log(res.data);
        localStorage.setItem("location", res.data.title);
        this.setState({
          title: res.data.title,
          name: res.data.name,
          description: res.data.description
        });
      })
      .catch(err => console.log(err));
  }

  movedata = direction => {
    const axiosconfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    return axios
      .post(
        "https://lambda-mud-test.herokuapp.com/api/adv/move/",
        direction,
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

  handleChange = e => {
    e.preventDefault();
    // this.setState({
    //   [e.target.name]: e.target.value
    // });
    this.setState({
      direction: e.target.value
    });
    // this.movedata(this.state);
  };

  submitMove = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    this.movedata(this.state);
    // this.setState({
    //   directions: ""
    // });
  };

  sendRequest = e => {
    console.log(e.target.name)
    const axiosconfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    return axios
      .post(
        "https://lambda-mud-test.herokuapp.com/api/adv/move/",
        e.target.name,
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
  

  title = state => {
    if (state.title === "Foyer") {
      return "Oregon";
    }
    if (state.title === "Outside Cave Entrance") {
      return "California";
    }
    if (state.title === "Grand Overlook") {
      return "Washingtion";
    }
  };

  ChangeMarker = () => {};

  Map = () => {
    const California = () => {
      if (this.state.title === "Outside Cave Entrance") {
        return bluemarker;
      } else {
        return redmarker;
      }
    };
    const Nevada = () => {
      return redmarker;
    };
    const Oregon = () => {
      if (this.state.title === "Foyer") {
        return bluemarker;
      } else {
        return redmarker;
      }
    };
    const Washington = () => {
      if (this.state.title === "Grand Overlook") {
        return bluemarker;
      } else {
        return redmarker;
      }
    };
    const statesList = [
      {
        key: "california",
        lat: 36.7783,
        lng: -119.4179,
        url: `${California()}`
      },
      { key: "nevada", lat: 38.8026, lng: -116.4194, url: `${Nevada()}` },
      {
        key: "washington",
        lat: 47.7511,
        lng: -120.7401,
        url: `${Washington()}`
      },
      { key: "oregon", lat: 43.8041, lng: -120.5542, url: `${Oregon()}` }
    ];
    const statePolyline = [
      {
        // cali to nevada
        lat: 36.7783,
        lng: -119.4179,
        lat2: 38.8026,
        lng2: -116.4194
      },
      {
        // cali to oregon
        lat: 47.7511,
        lng: -120.7401,
        lat2: 43.8041,
        lng2: -120.5542
      },
      {
        // oregon to washington
        lat: 36.7783,
        lng: -119.4179,
        lat2: 43.8041,
        lng2: -120.5542
      }
    ];
    return (
      <div>
        <GoogleMap defaultZoom={4.7} defaultCenter={{ lat: 43, lng: -105 }}>
          {statesList.map(state => (
            <Marker
              key={state.id}
              position={{
                lat: state.lat,
                lng: state.lng
              }}
              icon={{
                url: state.url,
                scaledSize: new window.google.maps.Size(25, 40)
              }}
            />
          ))}
          {statePolyline.map(polyline => (
            <Polyline
              path={[
                {
                  lat: polyline.lat,
                  lng: polyline.lng
                },
                {
                  lat: polyline.lat2,
                  lng: polyline.lng2
                }
              ]}
              geodesic={true}
              options={{
                strokeColor: "#FAA632",
                strokeOpacity: 0.75,
                strokeWeight: 5
              }}
            />
          ))}
          
        </GoogleMap>
      </div>
    );
  };

  // Google Map configuration

  RenderMap = () => {
    const MapWrapped = withScriptjs(withGoogleMap(this.Map));

    return (
      <div style={{ width: "100vw", height: "60vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCpRIIV74UGtS75mBRYftiMpr1IxblsK4E`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>
          <MoveForm
            submitMove={this.submitMove}
            handleChange={this.handleChange}
            direction={this.state.direction}
            sendRequest={this.sendRequest}
          />

          <LocationDisplay
            name={this.state.name}
            title={this.title(this.state)}
            description={this.state.description}
          />
          {this.RenderMap()}
        </div>
      </div>
    );
  }
}
