import React, { Component } from "react";

export default function LocationDisplay(props) {
  return (
    <div>
      <h5> Name: {props.name}</h5>
      <h5>Title: {props.title}</h5>
      <h5>Description: {props.description}</h5>
    </div>
  );
}
