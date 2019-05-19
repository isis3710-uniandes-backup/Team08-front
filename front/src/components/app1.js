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
    
  }


  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') 
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
  cargar (){
     window.location.replace("https://www.w3schools.com");}


    
    componentWillMount(){

    if(localStorage.getItem('token') == null){
      fetch('https://donu-back.herokuapp.com/login',{
        method:'POST',
        body:JSON.stringify({"username":"admin","password":"password"}),
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

  }

  render() {
    const { isAuthenticated } = this.props.auth;

    if(localStorage.getItem('isLoggedIn')){
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
                    className="btn btn-primary text-dark"
                    onClick={this.logout.bind(this)}
                  >
                   <a> Log out</a>
                  </Button>
                </li>
                <li>
                <img id = "blancoImagen" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX///+Hh4d4eHhqampcXFxRUVFUVFQqKipaWlqMjIyDg4NxcXF7e3tjY2OIiIh3d3dISEgICAhDQ0M/Pz82NjYwMDB94flrAAABkklEQVR4nO3dTU4DMRAF4fb8ZjIJgQD3vypZsEBsiJBarRrX5wu8Wlqy5HhbPz/e7/d5npfpYfy2Dz9d2r+dhz/t4xOu0xNO82/LGksc2xZT9YRkrYPCa/WEZC3G6gnJLOSzkM9CPgv5LOTroXCvnpCsxVA9IZmFfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWcjXQ+GlekKyFi/VE5K1xzk2C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5Ouh8Fw9IVkPL4aO/+rLQjoL+Szks5DPQj4L+Szks5DPQj4L+Szks5DPQj4L+Szks5DPQj4L+Szka3GrnpCsh39mLKSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkK/FVD0hmYV8FvJZyGchn4V8FvJZyGchn4V8FvJZyGchn4V8FvJZyGchn4V8PRSeqicka7FUT0jWYq6ekMxCPgv5LOSzkM9CPgv5LOTrofDoN+At1q0d2fb6BZbwB4JOz76RAAAAAElFTkSuQmCC" 
                onload="{this.cargar}"/>
                </li>
              </ul>
            </div>
          </nav>
<App/>

         
        </Router>
      </IntlProvider> 
     
    );}
    else{
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
                    className="btn btn-primary text-dark"
                    onClick={this.login.bind(this)}
                  >
                   <a> Log in </a>
                  </Button>
                </li>
                <li>
                <img id = "blancoImagen" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX///+Hh4d4eHhqampcXFxRUVFUVFQqKipaWlqMjIyDg4NxcXF7e3tjY2OIiIh3d3dISEgICAhDQ0M/Pz82NjYwMDB94flrAAABkklEQVR4nO3dTU4DMRAF4fb8ZjIJgQD3vypZsEBsiJBarRrX5wu8Wlqy5HhbPz/e7/d5npfpYfy2Dz9d2r+dhz/t4xOu0xNO82/LGksc2xZT9YRkrYPCa/WEZC3G6gnJLOSzkM9CPgv5LOTroXCvnpCsxVA9IZmFfBbyWchnIZ+FfBbyWchnIZ+FfBbyWchnIZ+FfBbyWcjXQ+GlekKyFi/VE5K1xzk2C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5Ouh8Fw9IVkPL4aO/+rLQjoL+Szks5DPQj4L+Szks5DPQj4L+Szks5DPQj4L+Szks5DPQj4L+Szka3GrnpCsh39mLKSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkK/FVD0hmYV8FvJZyGchn4V8FvJZyGchn4V8FvJZyGchn4V8FvJZyGchn4V8PRSeqicka7FUT0jWYq6ekMxCPgv5LOSzkM9CPgv5LOTrofDoN+At1q0d2fb6BZbwB4JOz76RAAAAAElFTkSuQmCC" 
                onload="{this.cargar}"/>
                </li>
              </ul>
            </div>
          </nav>
    
        <div id="demo1" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators" >
            <li data-target="#demo1" data-slide-to="0" className="active"></li>
            <li data-target="#demo1" data-slide-to="1" className=""></li>
            <li data-target="#demo1" data-slide-to="2" className=""></li>
          </ul>
          <div id="negro" className="carousel-inner">
            <div className="carousel-item active">
            <FormattedMessage id="image1">
            {src=>
              <img className="demo0 img-fluid" src="../../public/images/imgPrincipal.jpg" alt={src}/>
            }
            </FormattedMessage>
                
            </div>
            <div className="carousel-item">
              <FormattedMessage id="image2">
              {src=>
                <img className="demo0 img-fluid" src={src} alt={src}/>
              }
              </FormattedMessage>
              <div id="negrooo" className="centered2 carousel-caption d-none d-md-block"><h1 className="text-dark">.</h1></div>    
            </div>
            <div className="carousel-item">
              <FormattedMessage id="image3">
              {src=>
                <img className="demo0 img-fluid" src={src} alt={src}/>
              }
              </FormattedMessage>  
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo1" data-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
             <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#demo1" data-slide="next">
            <span className="carousel-control-next-icon white "></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
         
        </Router>
      </IntlProvider> 
     
    );
    }


  }

}
