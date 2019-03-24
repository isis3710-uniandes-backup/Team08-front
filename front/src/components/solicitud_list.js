import React from 'react';
import Solicitud from './solicitud.js'

export default class SolicitudList extends React.Component {

    status = {"solicitud_list": [
            {"_id": "1", "url_img": "/images/camiseta.jpg", "name": "Camiseta amarilla", "calidad": "3", "description":"Una camiseta muy linda." },
            {"_id": "2", "url_img": "/images/carro_de_juguete.jpg", "name": "Carro de juguete", "calidad": "4", "description":"Una carro de control a pilas." },
            {"_id": "3", "url_img": "/images/carro_de_juguete.jpg", "name": "Carro de juguete", "calidad": "4", "description":"Una carro de control a pilas." }
        ] 
    }

    renderSolicitudes() {
        return this.status.solicitud_list.map((p) => (<Solicitud key={p._id} solicitud={p}/>));
    }

    render() {
        return (
            <div id ="sol_list" class="carousel-wrapper">
            <div class="carousel" data-flickity>
                    {this.renderSolicitudes()}
  
                </div>
                <button type="button" className="btn btn-info">+</button>
            </div>
            
        );
    }
}