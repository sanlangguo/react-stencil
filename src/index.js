import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/index'
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <AppRouter/>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
