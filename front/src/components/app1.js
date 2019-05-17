import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "../locales/es";
import localeEnMessages from "../locales/en";
import {IntlProvider,FormattedMessage,addLocaleData} from "react-intl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./app"

addLocaleData([...enLocaleData,...esLocaleData]);
let i18nConfig = {
      locale: 'en',
      messages: localeEnMessages
  };
export default class App1 extends  React.Component {



  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
   // console.log("Ruta:", route);
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  refrescar(){
    window.location.reload();
  }


  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
       var lang = navigator.language
    console.log(lang);
    switch (lang) {
              case 'es-ES': i18nConfig.messages = localeEsMessages; break;
              case 'EN': i18nConfig.messages = localeEnMessages; break;
              default: i18nConfig.messages = localeEnMessages; break;
          }
    this.setState({ locale: lang });
    i18nConfig.locale = lang;
    } 
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log((localStorage.getItem('isLoggedIn') === 'true')+"está en true")
    console.log((localStorage.getItem('isLoggedIn') === 'false')+"está en false")
    if(!localStorage.getItem('isLoggedIn')){
      console.log("No autenticado");
      document.cookie = 1;
      this.login();

    }
    if(localStorage.getItem('token') == null){
      fetch('/login',{
        method:'POST',
        body:JSON.stringify({username:'admin',password:'password'}),
        headers:{
          'Content-Type':'application/json'
        }
      })
      .then(res=>res.json())
      .catch(error => console.error(error))
      .then(myJson=>{
        localStorage.setItem('token',myJson.token);
      })
    }

    return (
     
        <IntlProvider key={i18nConfig.locale} locale={i18nConfig.locale} messages={i18nConfig.messages}>
        <Router>

          <nav id="navvv" className="navbar navbar-expand-sm   ">
            <Link to="/" className="navbar-brand"><img src="/images/donu_logo.png" alt="Donu logo" weigth="40px;" height="40px;"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="probar" className="collapse navbar-collapse ">
              <ul className="nav navbar-nav navbar-center ">
                <li className="nav-item">
                  <a className="nav-link text-dark" onload={this.refrescar.bind(this)} href="/"><FormattedMessage id="navbar_home"/></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FormattedMessage id="navbar_donations"/>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/agregar_donacion/"><FormattedMessage id="navbar_donations_donate"/></a>
                    <a className="dropdown-item" href="/donaciones/"><FormattedMessage id="navbar_donations_see_donations"/></a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/misSolicitudes/"><FormattedMessage id="navbar_my_requests"/></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/soli/"><FormattedMessage id="navbar_requests"/></a>
                </li>
                <li className="nav-item">
                    <button id ="botoncito" type="button" className="btn btn-primary text-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><FormattedMessage id="navbar_create_request"/></button>
                </li> 
                <li className="nav-item">
                 <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
<App/>
         
        </Router>
      </IntlProvider> 
     
    );


  }

}
