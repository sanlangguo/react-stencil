import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/Header/index'
import Father from '../../components/Father/Father'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'hello react'
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='home'>
        <p>home</p>
        <p>{this.state.name}</p>
        <Header />
        <Father />
        <Link to='/home2'>context test</Link>
      </div>
    );
  }
}

