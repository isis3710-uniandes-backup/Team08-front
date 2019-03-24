import React from 'react';

export default class Solicitud extends React.Component {


    render() {
        return (
             <div class="carousel-cell">
       <div className="col-lg-4 col-md-2 col-sm-1">
                <div className="text-center">
                    <img src={this.props.solicitud.url_img} alt={this.props.solicitud.name} width="150px;"/>
                    <h5 className="card-title">{this.props.solicitud.name}</h5>
                    <p className="card-text">{this.props.solicitud.description}</p>
                </div>
            </div>
    </div>
           
        );
    }
}