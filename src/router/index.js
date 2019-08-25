import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/Home/index";
import Home2 from "../views/Home2/index";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home2" component={Home2} />
    </Switch>
  </Router>
);

export default AppRouter;
