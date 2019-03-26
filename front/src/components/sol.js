import React from 'react';

export default class sol extends React.Component {


    render() {
        return (
            
           

    <div className = "col-4">
  <div className="card  mb-4 box-shadow">
   <img className="card-img-top" src={this.props.solicitud.picture} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Solicitud #{this.props.solicitud.id}</h5>
      <p className="card-text">{this.props.solicitud.about}</p>
      <p className="card-text">Fondos Necesario: {this.props.solicitud.fondos}</p>
      <p className="card-text">Fondos Alcanzados : ${this.props.solicitud.cantidadFaltante}</p>
    </div>
  </div>
  </div>
    
    
           
        );
    }
}