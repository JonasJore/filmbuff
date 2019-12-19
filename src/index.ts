import React from "react";
import { render } from "react-dom";
import { App } from "./components/app";
import "./styles.css";

render(
  React.createElement(App),
  document.getElementById('app')
);