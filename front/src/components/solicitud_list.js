import React from 'react';
import Solicitud from './solicitud.js'

export default class SolicitudList extends React.Component {

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
             .then(function(response) {
                
                 return response.json();
             })
             .then(myJson => {
              console.log(myJson);
              var count = 0;
              var solicitudes=[];
              for(var soli of myJson){
                  
                  solicitudes.push(soli)
              }
                 this.setState({solicitud_list:solicitudes});
                
                
             });
     }

    renderSolicitudes() {
        return this.state.solicitud_list.map((p) => (<Solicitud key={p.id} solicitud={p}/>));
    }

  

    render() {
        return (
            
 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

 <h2 >Solicitudes en proceso</h2>
  <div className="carousel-inner">
  <div className="carousel-item active ">
      <img className="d-block w-100" src= "https://www.internews.org/sites/default/files/styles/article_header/public/2017-12/passing%20supplies%20on%20boat.jpg?itok=wQIaeNzw"alt="imagen"/>
    </div>
    {this.renderSolicitudes()}
    </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

            
            
        );
    }
}