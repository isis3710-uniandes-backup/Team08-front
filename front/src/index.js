import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { makeMainRoutes } from './components/routes';
import * as serviceWorker from './serviceWorker';



const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root1')
);
serviceWorker.register();