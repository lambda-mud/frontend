import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions";
import { Link } from 'react-router-dom';


class SignUp extends Component {
    state = {
        userInfo: {
            username: "",
            password1: "",
            password2: ""
        }
    };
    
    changeHandler = event => {
        event.preventDefault();
        this.setState({
            userInfo: {
            ...this.state.userInfo,
            [event.target.name]: event.target.value
            }
        });
    };
    
    submitDataHandler = event => {
        event.preventDefault();
        this.props.signUp(this.state.userInfo)
    };

    render () {
        return (
            <div className="form-wrap">
            <h1>Welcome to Road Trip!</h1>
            <form onSubmit={this.submitDataHandler}>
            <div className="sign-header">
                <h3 className='cat-head'>Register</h3>
                <p>Sign up below to access your new account!</p>
            </div>
            <label>Username</label>
            <input
                id="username"
                type="text"
                name="username"
                onChange={this.changeHandler}
                value={this.state.userInfo.username}
                className='in user'
                placeholder="Username"
            />
            <label>Password 1</label>
            <input
                id="password1"
                type="password"
                name="password1"
                value={this.state.userInfo.password1}
                onChange={this.changeHandler}
                className='in pass'
                placeholder="Password 1"
            />
            <label>Password 2</label>
            <input
                id="password2"
                type="password"
                name="password2"
                value={this.state.userInfo.password2}
                onChange={this.changeHandler}
                className='in pass'
                placeholder="Password 2"
            />
            <button onSubmit={this.submitDataHandler} className='actButton'>Sign Up! </button>
            <p>
                Already have an account? 
                <br></br>
                <Link to="/log-in">Log In Here.</Link>
            </p>
            </form>
            <div />
        </div>
        )
    }
}

export default connect(
    null,
    { signUp }
)(SignUp);