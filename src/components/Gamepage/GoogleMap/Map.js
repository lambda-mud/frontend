import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline
} from "react-google-maps";
import { StatesList, StatePolyline, MapZoom } from "./list";

function Map() {

  console.log(StatesList)
  return (
    <div>
      <GoogleMap defaultZoom={5.7} defaultCenter={MapZoom()}>
        {StatesList.map(state => (
          
          <Marker
            key={state.id}
            position={{
              lat: state.lat || 36.7783,
              lng: state.lng || -119.4179
            }}
            icon={{
              url: state.url,
              scaledSize: new window.google.maps.Size(50, 50)
            }}
          />
        ))}
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

export default function locationMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
