import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Header/NavBar";

// made this file to change navs easily when logged in or logged out
const ProtectedNav = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Navbar />;
        }
      }}
    />
  );
};

export default ProtectedNav;
