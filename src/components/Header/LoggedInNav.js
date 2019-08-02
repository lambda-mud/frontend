import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

class LoggedInNav extends Component {
  logOut = () => {
    localStorage.removeItem("token");
    // this.props.checkSignIn();
    // this.props.history.push("/log-in");
  };

  render() {
    return (
      <div className="container">
        <a className="font" href="https://fontmeme.com/cursive-fonts/">
          <img
            src="https://fontmeme.com/permalink/190731/648b11a1756e910d518cfc11b45ff93c.png"
            alt="cursive-fonts"
            border="0"
          />
        </a>
        <div>
          <NavLink className="authButton" to="/team">
            Team
          </NavLink>
          <a className="authButton" href="https://github.com/lambda-mud">
            GitHub Repo
          </a>
          <a
            className="authButton"
            href="https://documenter.getpostman.com/view/7133880/SVYnSgct?version=latest"
          >
            API Doc
          </a>
          <NavLink className="authButton" to="/" onClick={this.logOut}>
            Log Out
          </NavLink>
        </div>
      </div>
    );
  }
}

export default LoggedInNav;
