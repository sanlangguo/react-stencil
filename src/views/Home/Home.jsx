import React, { Component } from "react";
import Header from '../../components/Header/index'
import Father from '../../components/Father/Father'
// import { getResourcesToken } from '../../api/index';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "hello react"
    };
  }

  componentDidMount() {
    // getResourcesToken().then(
    // ).catch(() => {
    //   console.log('error get api data')
    // });
  }

  render() {
    return (
      <div className="home">
        <p>home</p>
        <p>{this.state.name}</p>
        <Header />
        <Father />
      </div>
    );
  }
}

