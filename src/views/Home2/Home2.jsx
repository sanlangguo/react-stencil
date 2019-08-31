import React, { Component } from 'react';
import Context from '../../components/Context/Context'

export default class Home2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Context header'
    };
  }

  render() {
    return (
      <div className='home'>
        <p>{this.state.name}</p>
        <Context />
      </div>
    );
  }
}

