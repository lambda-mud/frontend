import React from "react";
import "./App.css";
import Login from "./components/routes/LoginPage";
import Map from './components/googlemap/map'

function App() {
  const renderLogin = () => {
    if (!localStorage.getItem("token")) {
      return <Login />;
    } else {
      return "";
    }
  };

  const renderMap = () => {
    if (localStorage.getItem("token")) {
      return (
        <div>
          <Map />
        </div>
      );
    } else {
      return "";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {renderLogin()}
        {renderMap()}
        {/* <Login /> */}
      </header>
      <div>
        {/* <TestMap /> */}
      </div>
    </div>
  );
}

export default App;
