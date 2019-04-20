import React from 'react';
import ListaDonacion from './lista_donacion.js'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {FormattedMessage} from 'react-intl';
export default class VerDonaciones extends React.Component {

	render(){
		return (
			<div className="container">
				<h1 className="text-left"><FormattedMessage id="donations_title"/></h1>
				<br/>
				<ListaDonacion max={-1}/>
			</div>
		);
	}

}