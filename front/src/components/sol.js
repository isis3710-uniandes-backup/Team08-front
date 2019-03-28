import React from 'react';

export default class sol extends React.Component {

state = {

  "id" : []
}


handleSubmit(id, cantidadActual , url , about, fondos) {
    
var canNueva = cantidadActual+100;
    

console.log(id +"+");
console.log(canNueva+"-");
console.log(url +"+");
console.log(about+"-");
console.log(fondos +"+");

        fetch("/solicitud/"+id, {
            method: 'PUT',
           
            mode: "cors",
            body: {"id": id,
        "isActive": false,
        "cantidadConseguida": 8,
        "cantidadFaltante": canNueva,
        "fondos": fondos,
        "picture": url,
        "about": about,
        "registered": "2017-06-24T03:53:09 +05:00",
        "latitude": -76.708446,
        "longitude": 123.568829}
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

    } 

    handleSubmit1(id, cantidadActual , url , about, fondos) {
    

    var canNueva = cantidadActual+500;

   

        fetch("/solicitud/"+id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: {"id": id,
        "isActive": false,
        "cantidadConseguida": 8,
        "cantidadFaltante": canNueva,
        "fondos": fondos,
        "picture": url,
        "about": about,
        "registered": "2017-06-24T03:53:09 +05:00",
        "latitude": -76.708446,
        "longitude": 123.568829}
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

    } 

    handleSubmit2(id, cantidadActual , url , about, fondos) {
    

    var canNueva = cantidadActual+1000;

   

        fetch("/solicitud/"+id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: {"id": id,
        "isActive": false,
        "cantidadConseguida": 8,
        "cantidadFaltante": canNueva,
        "fondos": fondos,
        "picture": url,
        "about": about,
        "registered": "2017-06-24T03:53:09 +05:00",
        "latitude": -76.708446,
        "longitude": 123.568829}
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

    } 

   // <button type="button" onChange={this.handleSubmit(this.props.solicitud.id,this.props.solicitud.cantidadFaltante,this.props.solicitud.picture,this.props.solicitud.about,this.props.solicitud.fondos)} className="btn btn-outline-dark lalo">$100</button>
//<button type="button" onChange={this.handleSubmit1(this.props.solicitud.id,this.props.solicitud.cantidadFaltante,this.props.solicitud.picture, this.props.solicitud.about,this.props.solicitud.fondos)} className="btn btn-outline-dark lalo">$500</button>
//<button type="button" onChange={this.handleSubmit2(this.props.solicitud.id,this.props.solicitud.cantidadFaltante,this.props.solicitud.picture, this.props.solicitud.about, this.props.solicitud.fondos)} className="btn btn-outline-dark lalo">$1000</button>

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




</div>
  </div>
  
  </div>
    
    
           
        );
    }
}