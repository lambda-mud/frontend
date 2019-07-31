import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';

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
        <div className="form-wrap login">
            <form className='login' onSubmit={this.submitDataHandler}>
            <div>
                <label>Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={this.state.userInfo.username}
                    placeholder="Username"
                    onChange={this.changeHandler}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={this.state.userInfo.password}
                    placeholder="Password"
                    onChange={this.changeHandler}
                />
            </div>

            <button type='submit' className='actButton' >Log In!</button>
            <p>
                Don't have an account yet?
                <br></br>
                <Link className="link" to="/sign-up">Create one here.</Link>
            </p>
            </form>
            <div />
            <h1 className="heading login">Welcome back! Log in to continue your road trip!</h1>
        </div>
        )
    }
}
export default connect(
    null,
    { login }
)(LoginForm)
