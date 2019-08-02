import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline
} from "react-google-maps";
import { StatePolyline, cityMarkers } from "./list";

function Map(props) {
  console.log(cityMarkers(localStorage.getItem("new")));
  const mapSettings = {
    fullscreenControl: false,
    zoomControl: false,
    mapTypeControl: false,
  };
  return (
    <div>
      <GoogleMap
        defaultZoom={3.9}
        defaultCenter={{ lat: 39, lng: -109 }}
        defaultOptions={ mapSettings }
      >
        {console.log("rooms", props.rooms)}
        {props.rooms.map(state => {
          const cityInfo = cityMarkers(state.title);
          return (
            <Marker
              key={cityInfo.key}
              position={{
                lat: cityInfo.lat,
                lng: cityInfo.lng
              }}
              icon={{
                url: cityInfo.url,
                scaledSize: new window.google.maps.Size(50, 50)
              }}
            />
          );
        })}
        {StatePolyline.map(polyline => (
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
              strokeColor: "#216049",
              strokeOpacity: 0.75,
              strokeWeight: 7
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function fullMap(props) {
  return (
    <div style={{ width: "400px", height: "500px" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        rooms={props.rooms}
      />
    </div>
  );
}
