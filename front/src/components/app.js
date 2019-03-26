import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductList from "./product_list";
import SolicitudList from "./solicitud_list";

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

  add_product(event){
    // console.log(document.getElementById("first_name").value);
    var donante = {
      "id":Math.floor(Math.random()* (20000 - 2000 + 1)) + 2000,
      "nombre":document.getElementById("first_name").value+" "+document.getElementById("last_name").value,
      "telefono":document.getElementById("phone").value,
      "correo":document.getElementById("email").value,
      "genero":document.getElementById("gender").value,
      "edad":document.getElementById("age").value,
      "direccion":document.getElementById("address").value
    };
    var producto = {
      "id":Math.floor(Math.random()* (20000 - 2000 + 1)) + 2000,
      "name":document.getElementById("product_name").value,
      "url_img":document.getElementById("url_img").value,
      "quality":document.getElementById("quality").value,
      "description":document.getElementById("description").value
    };

    fetch('/donantes/',{
      method:'POST',
      body:JSON.stringify(donante),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res =>{
      fetch('/articulos/',{
      method:'POST',
      body:JSON.stringify(producto),
      headers:{
        'Content-Type': 'application/json'
      }
      })
      .then(res2 =>res2.json())
      .catch(error2 => console.error('Error:', error2))
      .then(response =>{
        window.location.href="/add_product/done";
      })
    })
    .catch(error => console.error('Error:', error));
    event.preventDefault();
  }

  DonarForm=()=>{
    return(
      <form onSubmit={this.add_product}>
            <h4 className="text-left">Datos personales</h4>
            <div className="form-row">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input id="first_name" type="text" className="form-control" placeholder="Nombres"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input id="last_name" type="text" className="form-control" placeholder="Apellidos"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                  <input id="email" type="text" className="form-control" placeholder="Correo"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                  <select id="gender" className="custom-select">
                    <option defaultValue>Género</option>
                    <option >Otro</option>
                    <option>Hombre</option>
                    <option>Mujer</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                  <input id="age" type="number" className="form-control" placeholder="Edad"/>
                </div>
                <div className="col-12 form-group">
                  <input id="address" type="text" className="form-control" placeholder="Dirección"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <select id="city" className="custom-select">
                    <option defaultValue>Ciudad</option>
                    <option value="1">Bogotá</option>
                    <option value="2">Cartagena</option>
                    <option value="3">Medellín</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input id="Ciudad" type="text" className="form-control" placeholder="Barrio"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input id="zip_code" type="text" className="form-control" placeholder="Código postal"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input id="phone" type="text" className="form-control" placeholder="Número de teléfono"/>
                </div>
            </div>
            <h4 className="text-left">Datos del producto</h4>
            <div className="form-row">
                <div className="col-lg-8 col-md-8 col-sm-10 form-group">
                  <input id="product_name" type="text" className="form-control" placeholder="Nombre del producto"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-2 form-group">
                  <select id="quality" className="custom-select">
                    <option defaultValue>Calidad</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-12 form-group">
                  <textarea id="description" type="text" className="form-control" placeholder="Descripción"></textarea>
                </div>
                <div className="col-12 form-group">
                  <input id="url_img" type="text" className="form-control" placeholder="URL de la imagen"/>
                </div>
            </div>
            <br/>
            <input type="submit" className="btn btn-dark" value="Donar"/>
          </form>
      );
  }

  DonarDone=()=>{
    return (
        <div className="text-center">
          <h3>¡Su solicitud fue exitosa!</h3>
          <Link to="/add_product/"><button className="btn btn-dark">Donar de nuevo</button></Link>
        </div>
      );
  }
  Inicio=()=>{
    return (
      <div>
        <SolicitudList/>
        <ProductList/>
        {this.renderAcerca()}
        {this.renderFooter()}
      </div>
      );
  }

  Donar=()=>{
    return (
      <div className="container text-center">
        <hr/>
        <h2>Gracias por tu contribución</h2>
        <hr/>
        <Router>
          
          <Route path="/add_product/" exact component={this.DonarForm} />
          <Route path="/add_product/done" component={this.DonarDone} />
        </Router>
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
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={this.Inicio} />
        <Route path="/add_product/" component={this.Donar} />
      
      </Router>
    );
  }
}