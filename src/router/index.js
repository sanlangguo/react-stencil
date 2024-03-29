import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/Home/index";
import Home2 from "../views/Home2/index";
import Hooks01 from "../views/Hooks/test01";
import Hooks02 from "../views/Hooks/test02";
import Hooks03 from "../views/Hooks/test03";
import Hooks04 from "../views/Hooks/test04";
import Hooks05 from "../views/Hooks/useReduce/test05";
import useContext from "../views/Hooks/useContext.jsx";
import useContext2 from "../views/Hooks/useContext2.jsx";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home2} />
      <Route path="/useContext" component={useContext2} />
    </Switch>
  </Router>
);

export default AppRouter;
