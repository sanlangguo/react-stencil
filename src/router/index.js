import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/Home/index";
import Home2 from "../views/Home2/index";
import Hooks01 from "../views/Hooks/test01";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Hooks01} />
      <Route path="/home2" component={Home2} />
    </Switch>
  </Router>
);

export default AppRouter;
