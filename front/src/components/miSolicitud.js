import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class MiSolicitud extends React.Component {

constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
  }


handleClick = event => {

var userId1 = event.target.id;
  console.log("mira"+ userId1);

  this.props.handleSubmit(userId1);
  
}
//onClick= {this.handleClick(x)}
//var x = this.props.solicitud.id;

    render() {

      

        return (

            <div className="card cartita" >
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Número de solicitud #{this.props.solicitud.id}
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
       <p>{this.props.solicitud.about}</p>
       <p>Fondos: {this.props.solicitud.fondos}</p>
       <p>Cantidad Faltante: {this.props.solicitud.cantidadFaltante}</p>
       <p>Url de la Imagen: {this.props.solicitud.picture}</p>
       <p>Registrado: {this.props.solicitud.registered}</p>

       
       <button id={this.props.solicitud.id} type="button" onClick = {this.handleClick}  className="btn btn-danger">Borrar</button>

      </div>
    </div>
  </div>

        );
    }
}