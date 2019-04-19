import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import {IntlProvider} from 'react-intl';


ReactDOM.render(
	<IntlProvider locale="en">
	<App/>
	</IntlProvider>, document.getElementById("root")
	);
