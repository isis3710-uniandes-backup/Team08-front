import React from 'react';
import Solicitud from './sol.js';

export default class SoliList extends React.Component {

   state = {
        "solicitud_list":[]
    }

    

    componentDidMount() {
     
        fetch('https://donu-back.herokuapp.com/solicitud',{
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
                  if (count>5){
                      break;
                  }count++;
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

     <div className = "album py-5 bg-light" >  
     <div className = "conteiner">
     <div className = "row">
     
   {this.renderSolicitudes()}

  </div>
  </div>
  </div>

 

            


            
            
        );
    }
}