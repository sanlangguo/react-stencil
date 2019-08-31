import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "login page"
    };
  }


  render() {
    return (
      <div className="home">
        <p>login</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

