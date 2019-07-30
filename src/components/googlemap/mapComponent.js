import React from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    Polyline
  } from "react-google-maps";
import bluemarker from "./bluemarker.png";
import redmarker from "./redmarker.png";

//  MapComponent(props) {
 export default function Map(props) {
    const California = () => {
      if (props.title === "Outside Cave Entrance") {
        return bluemarker;
      } else {
        return redmarker;
      }
    };
    const Nevada = () => {
      return redmarker;
    };
    const Oregon = () => {
      if (props.title === "Foyer") {
        return bluemarker;
      } else {
        return redmarker;
      }
    };
    const Washington = () => {
      if (props.title === "Grand Overlook") {
        return bluemarker;
      } else {
        return redmarker;
      }
    };

    return (
      <div>
        <GoogleMap defaultZoom={4.7} defaultCenter={{ lat: 43, lng: -105 }}>
          <Marker
            key="california"
            position={{
              lat: 36.7783,
              lng: -119.4179
            }}
            icon={{
              url: `${California()}`,
              scaledSize: new window.google.maps.Size(25, 40)
            }}
          />
          <Marker
            key="nevada"
            position={{
              lat: 38.8026,
              lng: -116.4194
            }}
            icon={{
              url: `${Nevada()}`,
              scaledSize: new window.google.maps.Size(25, 40)
            }}
          />
          <Marker
            key="washington"
            position={{
              lat: 47.7511,
              lng: -120.7401
            }}
            icon={{
              url: `${Washington()}`,
              scaledSize: new window.google.maps.Size(25, 40)
            }}
          />
          <Marker
            key="oregon"
            position={{
              lat: 43.8041,
              lng: -120.5542
            }}
            icon={{
              url: `${Oregon()}`,
              scaledSize: new window.google.maps.Size(25, 40)
            }}
          />
          <Polyline
            // cali to nevada
            path={[
              {
                lat: 36.7783,
                lng: -119.4179
              },
              {
                lat: 38.8026,
                lng: -116.4194
              }
            ]}
            geodesic={true}
            options={{
              strokeColor: "#FAA632",
              strokeOpacity: 0.75,
              strokeWeight: 5
            }}
          />
          <Polyline
            // cali to oregon
            path={[
              {
                lat: 47.7511,
                lng: -120.7401
              },
              {
                lat: 43.8041,
                lng: -120.5542
              }
            ]}
            geodesic={true}
            options={{
              strokeColor: "#FAA632",
              strokeOpacity: 0.75,
              strokeWeight: 5
            }}
          />
          <Polyline
            // oregon to washington
            path={[
              {
                lat: 36.7783,
                lng: -119.4179
              },
              {
                lat: 43.8041,
                lng: -120.5542
              }
            ]}
            geodesic={true}
            options={{
              strokeColor: "#FAA632",
              strokeOpacity: 0.75,
              strokeWeight: 5
            }}
          />
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
  return (
      <div>
          {this.RenderMap()}
      </div>
  )
// }
