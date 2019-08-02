// import bluemarker from "./roadtripmarkericon.ico";
import carMarker from "./roadtripmarkericon.ico";
import redmarker from "./markericon.ico";




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
    lat: 37.7749,
    lng: -122.4194,
    lat2: 38.5816,
    lng2: -121.4944,
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    lat2: 33.4484,
    lng2: -112.074,
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    lat2: 36.1699,
    lng2: -115.1398,
  },
  {
    lat: 38.5816,
    lng: -121.4944,
    lat2: 39.5296,
    lng2: -119.8138,
  },
  {
    lat: 38.5816,
    lng: -121.4944,
    lat2: 45.5155,
    lng2: -122.6793,
  },
  {
    lat: 45.5155,
    lng: -122.6793,
    lat2: 38.5816,
    lng2: -121.4944,
  },
  {
    lat: 45.5155,
    lng: -122.6793,
    lat2: 47.6062,
    lng2: -122.3321,
  },
  {
    lat: 47.6062,
    lng: -122.3321,
    lat2: 47.6588,
    lng2: -117.426,
  },
  {
    lat: 47.6588,
    lng: -117.426,
    lat2: 46.5891,
    lng2: -112.0391,
  },
  {
    lat: 47.6588,
    lng: -117.426,
    lat2: 43.615,
    lng2: -116.2023,
  },
  {
    lat: 43.615,
    lng: -116.2023,
    lat2: 40.7608,
    lng2: -111.891,
  },
  {
    lat: 40.7608,
    lng: -111.891,
    lat2: 39.5296,
    lng2: -119.8138,
  },
  {
    lat: 40.7608,
    lng: -111.891,
    lat2: 36.1699,
    lng2: -115.1398,
  },
  {
    lat: 46.5891,
    lng: -112.0391,
    lat2: 45.7833,
    lng2: -108.5007,
  },
  
  {
    lat: 46.5891,
    lng: -112.0391,
    lat2: 44.428,
    lng2: -110.5885,
  },
  {
    lat: 45.7833,
    lng: -108.5007,
    lat2: 46.8083,
    lng2: -100.7837,
  },
  {
    lat: 46.8083,
    lng: -100.7837,
    lat2: 46.8772,
    lng2: -96.7898,
  },
  {
    lat: 46.8083,
    lng: -100.7837,
    lat2: 44.3668,
    lng2: -100.3538,
  },
  {
    lat: 44.3668,
    lng: -100.3538,
    lat2: 40.8136,
    lng2: -96.7026,
  },
  {
    lat: 40.8136,
    lng: -96.7026,
    lat2: 37.6872,
    lng2: -97.3301,
  },
  {
    lat: 37.6872,
    lng: -97.3301,
    lat2: 39.7392,
    lng2: -104.9903,
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    lat2: 41.14,
    lng2: -104.8202,
  },
  {
    lat: 41.14,
    lng: -104.8202,
    lat2: 44.428,
    lng2: -110.5885,
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    lat2: 40.7608,
    lng2: -111.891,
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    lat2: 35.0844,
    lng2: -106.6504,
  },
  {
    lat: 35.0844,
    lng: -106.6504,
    lat2: 33.4484,
    lng2: -112.074,
  },
  {
    lat: 43.615,
    lng: -116.2023,
    lat2: 44.428,
    lng2: -110.5885,
  },
  {
    lat: 37.6872,
    lng: -97.3301,
    lat2: 35.4676,
    lng2: -97.5164,
  },
  {
    lat: 35.4676,
    lng: -97.5164,
    lat2: 30.2672,
    lng2: -97.7431,
  },
  {
    lat: 30.2672,
    lng: -97.7431,
    lat2: 29.7604,
    lng2: -95.3698,
  },
  {
    lat: 37.6872,
    lng: -97.3301,
    lat2: 39.0997,
    lng2: -94.5786,
  },




  // {
  //   lat: 36.1699,
  //   lng: -115.1398,
  //   lat2: 33.4484,
  //   lng2: -112.074,
  // }
];

export {  StatePolyline, cityMarkers };