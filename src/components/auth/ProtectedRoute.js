import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
        localStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
            <Redirect to="/log-in" />
        )
        }
    />
);

export default ProtectedRoute;
