import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import MiSolicitud from './miSolicitud.js';
export default class MisSolicitudes extends React.Component {


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
              for(var soli of myJson){
                  if (count>3){
                      break;
                  }count++;
                  solicitudes.push(soli)
              }
                 this.setState({solicitud_list:solicitudes});
                
                
             });
     }

    renderSolicitudes() {
        return this.state.solicitud_list.map((p) => (<MiSolicitud key={p.id} solicitud={p}/>));
    }

  
render() {
    return (
        <div>
        <div className="accordion" id="accordionExample">
  <div className="card">
    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
       Es de suma importancia que el usuario entienda que los datos le pertenecen a él, en caso de que desee borrar cualquiera de sus Solicitudes, DONU no persistirá ningún dato que usted haya decidido borrar del sistema. En caso de cualquier reclamo, no dude en comunicarse con cualquiera de nuestros contactos que se encuentran en la parte inferior de la página inicial.
      </div>
    </div>
  </div>
  
  
  </div>
  {this.renderSolicitudes()}
</div>
        
    );
}
}