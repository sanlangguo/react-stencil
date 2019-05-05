import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "hello header"
    };
  }

  componentDidMount() {
    console.log("react data");
  }

  render() {
    return (
      <div className="home">
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Header;
