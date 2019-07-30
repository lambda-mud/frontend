import React, { Component } from "react";
import "../../CSS/login.css";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    }
  };

  loginData = creds => {
    // console.log(creds)
    return axios
      .post("https://lambda-mud-test.herokuapp.com/api/login/", creds)
      .then(res => {
        localStorage.setItem("token", `Token ${res.data.key}`);

        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    // e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.loginData(this.state.credentials)
    window.location.reload(true)
  };

  render() {
    return (
      <div className="loginContainer">
        <div className="formContainer">
          <h1 className="loginheader">Log in</h1>
          <form onSubmit={this.login} className="loginForm">
            <TextField
              id="standard-dense"
              label="Username"
              className="signupInput"
              margin="dense"
              name="username"
              onChange={this.handleChange}
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              onChange={this.handleChange}
              name="password"
            />

            <button className="btnholder">
              <Button
                variant="contained"
                color="primary"
                className="formButton"
              >
                Login
              </Button>
            </button>
          </form>
        </div>

      </div>
    );
  }
}
