import { Route, Switch } from "react-router-dom";
import Home from "../views/Home/index";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);

export default Main;
