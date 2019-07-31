import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

    logOut = () => {
        localStorage.removeItem("token");
        this.props.checkSignIn();
        this.props.history.push("/log-in");
    };

    render() {
        return(
            <div>    
                <NavLink to='/sign-up'>Sign Up</NavLink>

                <NavLink to='/log-in'>Log In</NavLink>
            </div>
        )
    }
}

export default NavBar;
