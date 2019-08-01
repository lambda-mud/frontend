import React from 'react';
import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router';
import Homepage from '../Homepage/Homepage'

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
        localStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
            // <Redirect to="/" />
            <Homepage />
        )
        }
    />
);

export default ProtectedRoute;
