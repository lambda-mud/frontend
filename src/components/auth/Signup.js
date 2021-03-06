import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions";
import { Link } from "react-router-dom";
import "./index.css";

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
        this.props.signUp(this.state.userInfo).then(() => this.props.history.push("/"))
    };

    render() {
        return (
            <>
                {this.props.error && <p className="error">{this.props.error}</p>}
                <div className="form-wrap">
                    <div className="headingCont">
                        <h4 className='heading'>Register here to take a road trip on the west coast!</h4>
                        <h4 className='sub-heading'>Passwords must be 8 or more characters and include 1 uppercase, 1 lowercase, and 1 number.</h4>
                    </div>
                    <form onSubmit={this.submitDataHandler}>
                        <div className="input">
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
                        </div>
                        <div className="input">
                            <label>Password</label>
                            <input
                                id="password1"
                                type="password"
                                name="password1"
                                value={this.state.userInfo.password1}
                                onChange={this.changeHandler}
                                className='in pass'
                                placeholder="Password"
                            />
                        </div>
                        <div className="input">
                            <label>Confirm Password</label>
                            <input
                                id="password2"
                                type="password"
                                name="password2"
                                value={this.state.userInfo.password2}
                                onChange={this.changeHandler}
                                className='in pass'
                                placeholder="Confirm Password"
                            />
                        </div>
                        <button onSubmit={this.submitDataHandler} className='actButton'>Sign Up! </button>
                        <p>
                            Already have an account?
                <br></br>
                            <Link className="link" to="/log-in">Log In Here!</Link>
                        </p>
                    </form>
                    <div />
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
  error: state.userReducer.error
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
