import React from 'react';

export default class Solicitud extends React.Component {


    render() {
        return (
            
           <div className="carousel-item ">
      <img className="d-block w-100" src={this.props.solicitud.picture} alt={this.props.solicitud.id}/>
    </div>
    
    
           
        );
    }
}