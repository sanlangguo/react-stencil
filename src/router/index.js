import { Route, Switch } from "react-router-dom";
import Home from "../views/Home/index";
import Login from "../views/Login/index";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" text="首页" component={Home} />
      <Route path="/login" text="测试" component={Login} />
    </Switch>
  </main>
);

export default Main;
