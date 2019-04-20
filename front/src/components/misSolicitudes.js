import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import MiSolicitud from './miSolicitud.js';
import {FormattedMessage} from 'react-intl';
export default class MisSolicitudes extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


    state = {
        "solicitud_list":[]
    }

    componentDidMount() {
     
        fetch('/solicitud')
             .then(function(response) {
                
                 return response.json();
             })
             .then(myJson => {
              console.log(myJson);
              var count = 0;
              var solicitudes=[];
              var tam = myJson.length;
              for(var soli of myJson){
                  if(count> tam/2){
                 if(soli.picture.length>200)
                 {
                  soli.picture = "Url demasiado larga."
                 }
                  solicitudes.push(soli)}
                  count++;
              }
                 this.setState({solicitud_list:solicitudes});
                
                
             });
     }

     handleSubmit(userId) {
   
const userId1 = userId;
console.log(userId1+"ppp");
  const requestOptions = {
    method: 'DELETE'
  };

  // Note: I'm using arrow functions inside the `.fetch()` method.
  // This makes it so you don't have to bind component functions like `setState`
  // to the component.

  fetch("/solicitud/" + userId1, requestOptions).then((response) => {
    
  }).then((result) => {
    
    window.location.href="/misSolicitudes";

    // do what you want with the response here
  }).then((result)=>{
      var msg = "Has borrado la solicitud ";
      if(navigator.language == 'en'){
        msg = "You have deleted the request "
      }
      alert(msg+ userId1);
    });
    } 

    renderSolicitudes() {
        return this.state.solicitud_list.map((p,i) => (<MiSolicitud key={i++} id={i++} solicitud={p} handleSubmit={this.handleSubmit}/>));
    }

  
render() {
    return (
        <div className = "cartita">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div id="collapseOne" className="collapse show"  data-parent="#accordionExample">
                <div className="card-body">
                  <FormattedMessage id="my_requests_advise"/>
                </div>
              </div>
            </div>
          </div>
          {this.renderSolicitudes()}
        </div>
        
    );
}
}