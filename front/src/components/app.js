import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductList from "./product_list";
import SolicitudList from "./solicitud_list";
import MyForm from "./MyForm";
import Points from "./points";
import MisSolicitudes from "./misSolicitudes";
import AddProduct from "./add_product";

export default class App extends React.Component {

  
  renderAcerca(){
    return (
        <div id="acerca" className="text-center">
          <hr/>
          <h2>Acerca de DONU</h2>
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
                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
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
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Proyectos</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Contactos</Link></li>
                <li><Link to="/">Precios</Link></li>
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
      <div>
        <SolicitudList/>
        <ProductList/>
        {this.renderAcerca()}
        <Points/>
        {this.renderFooter()}
      </div>
      );
  }


  Donar=()=>{
    return (<AddProduct/>);
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

  render() {
    return (
      <Router>
      
        <nav className="navbar navbar-expand-sm  bg-dark fixed-top">
          <Link to="/" className="navbar-brand"><img src="/images/donu_logo.png" alt="Donu logo" weigth="40px;" height="40px;"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav top-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add_product/">Donar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/misSolicitudes/">Mis Solicitudes</Link>
              </li>
              <li class="nav-item">
                   <button  class="nav-link" data-toggle="modal" data-target="#myModal">Crear Solicitud</button>
              </li>
            </ul>
          </div>
        </nav>

        <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Cree su Solicitud</h4>
      </div>
      <div id = "elfooter">
          <MyForm/>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

        <Route path="/" exact component={this.Inicio} />
        <Route path="/add_product/" component={this.Donar} />
        <Route path= "/misSolicitudes" component= {this.miSolicitudes}/>

      
      </Router>
    );
  }
}