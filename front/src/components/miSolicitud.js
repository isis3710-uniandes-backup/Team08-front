import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class MiSolicitud extends React.Component {


    render() {
        return (

            <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Número de solicitud #{this.props.solicitud.id}
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
       <p>{this.props.solicitud.about}</p>
       <p>Fondos: {this.props.solicitud.fondos}</p>
       <p>Cantidad Faltante: {this.props.solicitud.cantidadFaltante}</p>
       <p>Url de la Imagen: {this.props.solicitud.picture}</p>
       <p>Registrado: {this.props.solicitud.registered}</p>
      </div>
    </div>
  </div>

        );
    }
}