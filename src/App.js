import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './views/Home/index';
import Home2 from './views/Home2/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='root'>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/home2/" component={Home2} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
