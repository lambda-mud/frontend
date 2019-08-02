import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  ProtectedRoute,
  ProtectedNav,
  SignUp,
  Login
} from "./components/auth/exportsAuth";
import GamePage from "./components/Gamepage/GamePage.js";
import NotFound from "./components/PageNotFound/NotFound";
import LoggedInNav from "./components/Header/LoggedInNav";
import Aboutpage from "./components/AboutUs/aboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <ProtectedNav path="/" component={LoggedInNav} />
        {/* will render homepage if not logged in */}
        {/* <Switch> allows app to switch pages so 404 page not found can show */}
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/log-in" component={Login} />
          <Route path="/team" component={Aboutpage} />
          <ProtectedRoute exact path="/" component={GamePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
