import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListaDonacion from "./lista_donacion";
import SolicitudList from "./solicitud_list";
import MyForm from "./MyForm";
import Points from "./points";
import MisSolicitudes from "./misSolicitudes";
import AgregarDonacion from "./agregar_donacion";
import FormDonacion from './form_donacion.js';
import VerDonaciones from './ver_donaciones';
import Sol_list from "./sol_list";

export default class App extends React.Component {

  
  renderAcerca(){
    return (
        <div className="col-12">
          <h5>Acerca de DONU</h5>
          <p>Donu es una plataforma web que pretender facilitar el proceso de donaciones entre las personas y las ONG En esta plataforma pretendemos que tanto los usuario y las ong puedan decir los elementos que pueden donar y los que realmente necesitan.</p>
          <hr/>
        </div>
      );
  }

  renderFooter(){
    return(
        <div>
          <footer className="section footer-clasic context-dark bg-dark">
            <div className="container">
              <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4"><Link to="/" className="brand"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcSet="images/agency/logo-retina-inverse-280x74.png 2x"/></Link>
                <p>Somos una sociedad sin ánimo de lucro que pretende facilitar el proceso de donación .</p>
                <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>798 South Park Avenue, Jaipur, Raj</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><Link to="/">dkstudioin@gmail.com</Link></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><Link to="/">+91 7568543012</Link> <span>or</span> <Link to="/">+91 9571195353</Link>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><Link to="/">Facebook</Link></li>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Twitter</Link></li>
                <li><Link to="/">Google plus</Link></li>
                <li><Link to="/">Reddit</Link></li>
              </ul>
            </div>
          </div>
            </div>
          </footer>
        </div>
      );
  }

  
  Inicio=()=>{
    return (
    <div >
    <div id="demo1" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators" >
    <li data-target="#demo1" data-slide-to="0" className="active"></li>
    <li data-target="#demo1" data-slide-to="1" className=""></li>
    <li data-target="#demo1" data-slide-to="2" className=""></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">

      <img className="demo0 img-fluid" src="/images/imagen1.png" alt="Los Angeles" />
      
      <div className="centered carousel-caption d-none d-md-block">¡Has del mundo un mejor lugar!</div>  
    </div>
    <div class="carousel-item">
      <img className="demo0 img-fluid" src="/images/imagen3.jpg" alt="Chicago"  />
      <div className="centered2 carousel-caption d-none d-md-block">Empodera a las nuevas generaciones</div>    
    </div>
    <div className="carousel-item">
      <img className="demo0 img-fluid" src="/images/imagen2.jpg" alt="New York"  />
      <div className="centered3 carousel-caption d-none d-md-block">Aporta al futuro de la humanidad</div>       
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo1" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo1" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
      <div className="container">
        <hr/>
        <div className="row">
          <div className="col-6">
            <div className="row">
            {this.renderAcerca()}
            <div className="col-12">
              <h5>¿Estás interesado en donar?</h5>
              <p>¡Realiza una donación, mira la evidencia de tus buenas acciones y gana puntos con tan sólo un click!</p>
            </div>
          </div>
          </div>
          <div className="col-6">
            <FormDonacion/>
          </div>
        </div>
        <hr/>
        <div className="text-center">
          <h2 className="text-left">Algunas donaciones hechas:</h2>
          <ListaDonacion max={3}/>
          <button type="button" className="btn btn-dark" text-whi><Link to="/donaciones/">Ver más</Link></button>
        </div>
        <hr/>
        <Points/>
        {this.renderFooter()}
      </div>
      </div>
      );
  }


  Donar=()=>{
    return (<AgregarDonacion/>);
  }

  Donaciones=()=>{
    return (<VerDonaciones/>);
  }

  miSolicitudes=()=>{
    return (
      <div className="container text-center">
        <hr/>
        <h2>¡Actualmente estas son sus solicitudes!</h2>
        <hr/>
        <MisSolicitudes/>
        <br/>
        <Link to="/"><button className="btn btn-dark">Volver a inicio</button></Link>
      </div>
      );
  }
  soli=()=>{
    return (
      <div className="container text-center">
        <hr/>
        <h2>¡No esperes más para ayudar a los demás!</h2>
        <hr/>
        <Sol_list/>
        <br/>
        <Link to="/"><button className="btn btn-dark">Volver a inicio</button></Link>
      </div>
      );
  }

  render() {
    return (
      <Router>

        <nav id="navvv" className="navbar navbar-expand-sm   fixed-top">
          <Link to="/" className="navbar-brand"><img src="/images/donu_logo.png" alt="Donu logo" weigth="40px;" height="40px;"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="probar" className="collapse navbar-collapse ">
            <ul className="nav navbar-nav navbar-center ">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Donaciones
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/agregar_donacion/">Donar</Link>
                  <Link className="dropdown-item" to="/donaciones/">Ver donaciones</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/misSolicitudes/">Mis Solicitudes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/soli/">Solicitudes</Link>
              </li>
              <li className="nav-item">

                  <button id ="botoncito" type="button" className="btn btn-primary text-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Crear Solicitud</button>
              </li> 
            </ul>
          </div>
        </nav>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Nueva Solicitud</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       <MyForm/>
     
      
    </div>
  </div>
</div>

        
        <Route path="/" exact component={this.Inicio} />
        <Route path="/agregar_donacion/" component={this.Donar} />
        <Route path="/donaciones/" component={this.Donaciones} />
        <Route path= "/misSolicitudes" component= {this.miSolicitudes}/>
        <Route path= "/soli" component= {this.soli}/>
      </Router>
    );
  }
}