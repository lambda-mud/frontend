import React, { Component } from "react";
import "./index.css";

export default class Aboutpage extends Component {
  render() {
    return (
      <div className="about">
        <div className=" team">
          <div className="row">
            <div className="member">
              <h1>Team Lead</h1>
              <img
                src="https://avatars1.githubusercontent.com/u/3112234?s=460&v=4"
                alt=""
                className="profileImg"
              />
              <h2>Daniel Weinman</h2>
            </div>
            <div className="member">
              <h1>Back-End</h1>
              <img
                src="https://avatars1.githubusercontent.com/u/4283962?s=460&v=4"
                alt=""
                className="profileImg"
              />
              <h2>Divya Nair</h2>
            </div>
            <div className="member">
              <h1>Back-End</h1>
              <img
                src="https://avatars0.githubusercontent.com/u/30749439?s=460&v=4"
                alt=""
                className="profileImg"
              />
              <h2>Anubhav Bhambri</h2>
            </div>
          </div>
          <div className="row">
            <div className="member">
              <h1>Back-End</h1>
              <img
                src="https://avatars2.githubusercontent.com/u/47379051?s=460&v=4"
                alt=""
                className="profileImg"
              />
              <h2>Benjamin Chandler</h2>
            </div>
            <div className="member">
              <h1>Front-End</h1>
              <img
                src="https://avatars3.githubusercontent.com/u/47460334?s=460&v=4"
                alt=""
                className="profileImg"
              />
              <h2>Josefia Magagnoli</h2>
            </div>
            <div className="member">
              <h1>Front-End</h1>
              <img
                src="https://avatars2.githubusercontent.com/u/32081816?s=460&v=4"
                alt=""
                className="profileImg"
              />
              <h2>Irving Duran</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
