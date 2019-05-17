import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormDonacion from './form_donacion.js';
import {FormattedMessage} from 'react-intl';
export default class AgregarDonacion extends React.Component {

    DonarForm=()=>{
        return(
            <FormDonacion/>
        );
    }

    DonarDone=()=>{
        return (
        <div className="text-center">
          <h3><FormattedMessage id="successful_donation_state"/></h3>
          <Link to="/agregar_donacion/"><button className="btn btn-dark"><FormattedMessage id="successful_donation_donate_again"/></button></Link>
        </div>
      );
    }

    render() {
        return (
      <div className="container text-center">
        <hr/>
        <h1><FormattedMessage id="successful_donation_title"/></h1>
        <hr/>
        <Router>
          
          <Route path="/agregar_donacion/" exact component={this.DonarForm} />
          <Route path="/agregar_donacion/done" component={this.DonarDone} />
        </Router>
        <br/>
        <Link to="/"><button className="btn btn-dark"><FormattedMessage id="back_home"/></button></Link>
      </div>
      );
    }
}