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
     
        fetch('/solicitud',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
        .catch(error=>console.log(error))
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
  const urlPrin = " https://donu-back.herokuapp.com/solicitud/"+userId1;
console.log(userId1);
  fetch(urlPrin,{
            method:'DELETE',
            headers:{
                'Authorization':'Bearer '+localStorage.getItem('token'),
                 'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .catch(error=>console.log(error)).then((response) => {
          console.log(response+"rrr");
    
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