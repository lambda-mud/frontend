import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function MoveForm(props) {
  return (
    <div>
      <form onSubmit={props.submitMove}>
        <TextField
          id="standard-dense"
          label=" Direction"
          // value="n"
          margin="dense"
          name="direction"
          onChange={props.handleChange}
        />
        <button className="btnholder">
          <Button variant="contained" color="primary">
            Move
          </Button>
        </button>
      </form>
      <div>
        <button         name="n"
        value="n"
        onClick={props.sendRequest}>
          North
        </button>
      <Button
        variant="contained"
        color="primary"
        name="n"
        value="n"
        onClick={props.sendRequest}
      >
        North
      </Button></div>
      <Button
        variant="contained"
        color="primary"
        name="s"
        value="s"
        onClick={props.sendRequest}
      >
        south
      </Button>
    </div>
  );
}
