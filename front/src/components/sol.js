import React from 'react';

export default class sol extends React.Component {

state = {

  "id" : []
}


handleSubmit(id, cantidadActual) {
    
var canNueva = cantidadActual+100;
    

console.log(this.state.id +"+");
console.log(cantidadActual+"-");

        fetch("/solicitud/"+id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: {"cantidadFaltante": canNueva}
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

    } 

    handleSubmit1() {
    
var userId = this.props.solicitud.id;
   var cantidadActual = this.props.solicitud.id;
    var canNueva = cantidadActual+500;

   

        fetch("/solicitud", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: {"cantidadFaltante": canNueva}
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

    } 

    handleSubmit2(id, cantidadActual) {
    

    var canNueva = cantidadActual+1000;

   

        fetch("/solicitud/"+id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: {"cantidadFaltante": canNueva}
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

    } 

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

    <div className="bd-example ">

<button type="button" onClick={this.handleSubmit.bind(this.props.solicitud.id,this.props.solicitud.cantidadFaltante)} className="btn btn-outline-dark lalo">$100</button>
<button type="button" onClick={this.handleSubmit.bind(this.props.solicitud.id,this.props.solicitud.cantidadFaltante)} className="btn btn-outline-dark lalo">$500</button>
<button type="button" onClick={this.handleSubmit.bind(this.props.solicitud.id,this.props.solicitud.cantidadFaltante)} className="btn btn-outline-dark lalo">$1000</button>


</div>
  </div>
  
  </div>
    
    
           
        );
    }
}