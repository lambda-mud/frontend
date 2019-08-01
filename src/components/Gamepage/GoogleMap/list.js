import bluemarker from "./roadtripmarkericon.ico";
import redmarker from "./markericon.ico";

export { StatesList, StatePolyline, MapZoom };

const California = () => {
  if (localStorage.getItem("location") === "California") {
    return bluemarker;
  } else {
    return redmarker;
  }
};
const Nevada = () => {
  if (localStorage.getItem("location") === "Nevada") {
    return bluemarker;
  } else {
    return redmarker;
  }
};
const Oregon = () => {
  if (localStorage.getItem("location") === "Oregon") {
    return bluemarker;
  } else {
    return redmarker;
  }
};
const Washington = () => {
  if (localStorage.getItem("location") === "Washington") {
    return bluemarker;
  } else {
    return redmarker;
  }
};

const MapZoom = () => {
  if (localStorage.getItem("location") === "California") {
    return {
      lat: 36.7783,
      lng: -119.4179
    };
  }
  if (localStorage.getItem("location") === "Oregon") {
    return {
      lat: 43.8041,
      lng: -120.5542
    };
  }
  if (localStorage.getItem("location") === "Washington") {
    return {
      lat: 47.7511,
      lng: -120.7401
    };
  }
  if (localStorage.getItem("location") === "Nevada") {
    return {
      lat: 38.313515,
      lng: -117.055374
    };
  }
};


const StatesList = [
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

const StatePolyline = [
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
