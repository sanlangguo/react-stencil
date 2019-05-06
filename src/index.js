import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <browserHistory>
    <App />
  </browserHistory>,
  document.getElementById("root")
);
