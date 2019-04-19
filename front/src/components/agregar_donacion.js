import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormDonacion from './form_donacion.js';
export default class AgregarDonacion extends React.Component {

    FormDonante(){
        return(
            <div>
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
            </div> 
        );
    }

    DonarForm=()=>{
        return(
            <FormDonacion/>
        );
    }

    DonarDone=()=>{
        return (
        <div className="text-center">
          <h3>¡Su solicitud fue exitosa!</h3>
          <Link to="/agregar_donacion/"><button className="btn btn-dark">Donar de nuevo</button></Link>
        </div>
      );
    }

    render() {
        return (
      <div className="container text-center">
        <hr/>
        <h1>Gracias por ayuda a crecer Donu </h1>
        <hr/>
        <Router>
          
          <Route path="/agregar_donacion/" exact component={this.DonarForm} />
          <Route path="/agregar_donacion/done" component={this.DonarDone} />
        </Router>
        <br/>
        <Link to="/"><button className="btn btn-dark">Volver a inicio</button></Link>
      </div>
      );
    }
}