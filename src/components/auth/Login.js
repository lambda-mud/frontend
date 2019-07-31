import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../store/actions';

class LoginForm extends Component {
    state = {
        userInfo: {
            username: '',
            password: '',
        }
    }


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
        this.props.login(this.state.userInfo).then(() => this.props.history.push("/")) 
    };

    render() {
        return (
        <div className="form-wrap">
            <form className='login' onSubmit={this.submitDataHandler}>
            <div className="sign-header">
                <h3 className='cat-head'>Log In</h3>
            </div>
            <label>Username</label>
            <input
                id="username"
                type="text"
                name="username"
                value={this.state.userInfo.username}
                className='in user'
                placeholder="Username"
                onChange={this.changeHandler}
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                name="password"
                value={this.state.userInfo.password}
                className='in pass'
                placeholder="Password"
                onChange={this.changeHandler}
            />
            {/* <label htmlFor="password">Password 2</label>
            <input
                id="password"
                type="password"
                name="password2"
                value={this.state.userInfo.password}
                className='in pass'
                placeholder="Password 2"
                onChange={this.changeHandler}
            /> */}
            <button type='submit' className='actButton' >Log In!</button>
            <p>
                Log in below to access your map. Don't have an account yet?
                <br></br>
                <Link to="/sign-up">Create one here.</Link>
            </p>
            </form>
            <div />
        </div>
        )
    }
}
export default connect(
    null,
    { login }
)(LoginForm)