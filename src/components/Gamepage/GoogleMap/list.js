import bluemarker from "./roadtripmarkericon.ico";
import carMarker from "./roadtripmarkericon.ico";
import redmarker from "./markericon.ico";

export {  StatePolyline, cityMarkers };


const marker = city => {
  if (localStorage.getItem("location") === city) {
    return carMarker;
  } else {
    return redmarker;
  }
};

const cityMarkers = city => {
  if (city === "Pierre") {
    return {
      key: `${city}`,
      lat: 44.3668,
      lng: -100.3538,
      // checkZoom: `${MapZoom(city, 47.6062 - 122.3321)}`,
      url: `${marker(city)}`
    };
  }
  if (city === "Seattle") {
    return {
      key: `${city}`,
      lat: 47.6062,
      lng: -122.3321,
      url: `${marker(city)}`
    };
  }
  if (city === "Spokane") {
    return {
      key: `${city}`,
      lat: 47.6588,
      lng: -117.426,
      url: `${marker(city)}`
    };
  }
  if (city === "Portland") {
    return {
      key: `${city}`,
      lat: 45.5155,
      lng: -122.6793,
      url: `${marker(city)}`
    };
  }
  if (city === "Sacramento") {
    return {
      key: `${city}`,
      lat: 38.5816,
      lng: -121.4944,
      url: `${marker(city)}`
    };
  }
  if (city === "San Francisco") {
    return {
      key: `${city}`,
      lat: 37.7749,
      lng: -122.4194,
      url: `${marker(city)}`
    };
  }
  if (city === "Reno") {
    return {
      key: `${city}`,
      lat: 39.5296,
      lng: -119.8138,
      url: `${marker(city)}`
    };
  }
  if (city === "Las Vegas") {
    return {
      key: `${city}`,
      lat: 36.1699,
      lng: -115.1398,
      url: `${marker(city)}`
    };
  }
  if (city === "Phoenix") {
    return {
      key: `${city}`,
      lat: 33.4484,
      lng: -112.074,
      url: `${marker(city)}`
    };
  }
  if (city === "Boise") {
    return {
      key: `${city}`,
      lat: 43.615,
      lng: -116.2023,
      url: `${marker(city)}`
    };
  }
  if (city === "Salt Lake City") {
    return {
      key: `${city}`,
      lat: 40.7608,
      lng: -111.891,
      url: `${marker(city)}`
    };
  }
  if (city === "Helena") {
    return {
      key: `${city}`,
      lat: 46.5891,
      lng: -112.0391,
      url: `${marker(city)}`
    };
  }
  if (city === "Billings") {
    return {
      key: `${city}`,
      lat: 45.7833,
      lng: -108.5007,
      url: `${marker(city)}`
    };
  }
  if (city === "Yellowstone National Park") {
    return {
      key: `${city}`,
      lat: 44.428,
      lng: -110.5885,
      url: `${marker(city)}`
    };
  }
  if (city === "Cheyenne") {
    return {
      key: `${city}`,
      lat: 41.14,
      lng: -104.8202,
      url: `${marker(city)}`
    };
  }
  if (city === "Denver") {
    return {
      key: `${city}`,
      lat: 39.7392,
      lng: -104.9903,
      url: `${marker(city)}`
    };
  }
  if (city === "Albuquerque") {
    return {
      key: `${city}`,
      lat: 35.0844,
      lng: -106.6504,
      url: `${marker(city)}`
    };
  }
  if (city === "Bismarck") {
    return {
      key: `${city}`,
      lat: 46.8083,
      lng: -100.7837,
      url: `${marker(city)}`
    };
  }
  if (city === "Fargo") {
    return {
      key: `${city}`,
      lat: 46.8772,
      lng: -96.7898,
      url: `${marker(city)}`
    };
  }
  if (city === "Lincoln") {
    return {
      key: `${city}`,
      lat: 40.8136,
      lng: -96.7026,
      url: `${marker(city)}`
    };
  }
  if (city === "Wichita") {
    return {
      key: `${city}`,
      lat: 37.6872,
      lng: -97.3301,
      url: `${marker(city)}`
    };
  }
  if (city === "Oklahoma City") {
    return {
      key: `${city}`,
      lat: 35.4676,
      lng: -97.5164,
      url: `${marker(city)}`
    };
  }
  if (city === "Portland") {
    return {
      key: `${city}`,
      lat: 45.5155,
      lng: -122.6793,
      url: `${marker(city)}`
    };
  }
  if (city === "Austin") {
    return {
      key: `${city}`,
      lat: 30.2672,
      lng: -97.7431,
      url: `${marker(city)}`
    };
  }
  if (city === "Kansas City") {
    return {
      key: `${city}`,
      lat: 39.0997,
      lng: -94.5786,
      url: `${marker(city)}`
    };
  }
  if (city === "Houston") {
    return {
      key: `${city}`,
      lat: 29.7604,
      lng: -95.3698,
      url: `${marker(city)}`
    };
  } else {
    return `${console.log(city)}`
    ;
  }
};
const StatePolyline = [
  {
    // cali to nevada
    lat: 36.7783,
    lng: -119.4179,
    lat2: 38.8026,
    lng2: -116.4194
  },
];
