import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { makeMainRoutes } from './components/routes';



const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root1')
);
