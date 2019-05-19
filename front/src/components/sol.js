import React from 'react';
import {FormattedMessage} from 'react-intl';
export default class sol extends React.Component {

state = {

  "id" : []
}


handleSubmit(event) {
    


    //var canNueva = cantidadActual+1000;
var userId1 = event.target.id;
   fetch('https://donu-back.herokuapp.com/solicitud/'+userId1,{
            method:'GET',
            
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
             .then(function(response) {
                
                 return response.json();
             })
             .then(myJson => {
                
               var x = myJson.cantidadFaltante + 1000;

               myJson.cantidadFaltante = x;

               return myJson;

               
             }).then(myJson1 =>{

var y = JSON.stringify(myJson1);
console.log("omeee"+y);
                fetch("https://donu-back.herokuapp.com/solicitud/"+ userId1, {
            method: 'PUT',
            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            },
           
            body: y
        })
            .then(response => {response.json(); console.log("quejestooo")})
            .then(data => console.log(data+ "funciona?"))
            .catch(error => console.log(error +"se murioooooo"));
alert("Succes");
             }).then(function(response){ window.location.href="/agregar_donacion/hecho";});
             
    } 

    handleSubmit1(event) {
    


    //var canNueva = cantidadActual+1000;
var userId1 = event.target.id;
   fetch(' https://donu-back.herokuapp.com/solicitud/'+userId1)
             .then(function(response) {
                
                 return response.json();
             })
             .then(myJson => {
                
               var x = myJson.cantidadFaltante + 500;

               myJson.cantidadFaltante = x;

               return myJson;

               
             }).then(myJson1 =>{

var y = JSON.stringify(myJson1);
console.log("omeee"+y);
                fetch(" https://donu-back.herokuapp.com/solicitud/"+ userId1, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: y
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

             });

    } 

    handleSubmit2(event) {
    

    //var canNueva = cantidadActual+1000;
var userId1 = event.target.id;
   fetch(' https://donu-back.herokuapp.com/solicitud/'+userId1)
             .then(function(response) {
                
                 return response.json();
             })
             .then(myJson => {
                
               var x = myJson.cantidadFaltante + 100;

               myJson.cantidadFaltante = x;

               return myJson;

               
             }).then(myJson1 =>{

var y = JSON.stringify(myJson1);
console.log("omeee"+y);
                fetch(" https://donu-back.herokuapp.com/solicitud/"+ userId1, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: y
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

             });
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
                <p  className="card-title acercah5"><FormattedMessage id="soli_number"/>{this.props.solicitud.id}</p>
                <p className="card-text">{this.props.solicitud.about}</p>
                <p className="card-text"><FormattedMessage id="soli_fund"/>: {this.props.solicitud.fondos}</p>
                <p className="card-text"><FormattedMessage id="soli_quantity"/>: ${this.props.solicitud.cantidadFaltante}</p>
              </div>
              <div className="bd-example ">
                <button id = {this.props.solicitud.id} type="button" onClick={this.handleSubmit} className="btn btn-outline-dark lalo">$1000</button>
              </div>
            </div>
          </div>       
        );
    }
}