import React from "react";
import { render } from "react-dom";
import { Router } from "./components/router";
import { BrowserRouter } from 'react-router-dom';
import "./styles.css";

render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>,
  document.getElementById('app')
);
