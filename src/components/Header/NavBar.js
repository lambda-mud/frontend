import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

class NavBar extends Component {

    logOut = () => {
        localStorage.removeItem("token");
        this.props.checkSignIn();
        this.props.history.push("/log-in");
    };

    render() {
        return(
            <div className="container">    

            <a className="font"href="https://fontmeme.com/cursive-fonts/"><img src="https://fontmeme.com/permalink/190731/648b11a1756e910d518cfc11b45ff93c.png" alt="cursive-fonts" border="0" /></a>

                <div>

                    <button className="authButton">
                        <NavLink className="" to='/sign-up'>Sign Up</NavLink>
                    </button>
                    <button className="authButton">
                        <NavLink to='/log-in'>Log In</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

export default NavBar;
