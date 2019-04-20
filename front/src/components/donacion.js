import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
export default class Donacion extends React.Component {
    
    obtenerDescripcion(){
        var texto = this.props.donacion.description;
        texto = texto.substring(0,30);
        if(texto.length>29){
            texto = texto+'...';
        }
        return texto;
    }

    render() {
        return (       
        <div className="col-lg-4 col-md-4 col-sm-1">
            <div className="card bg-light">
                <img src={this.props.donacion.url_img} className="card-img-top" alt={this.obtenerDescripcion()} />
                <div className="">
                    <p className="card-titleh4">{this.props.donacion.name}</p>
                    <p className="card-text">{this.obtenerDescripcion()}</p>
                    <p className="card-text"><FormattedMessage id="donation_quality"/>: {this.props.donacion.quality}</p>
                </div>
            </div>
            <br/>
        </div>
        );
    }
}