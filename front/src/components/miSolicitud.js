import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
export default class MiSolicitud extends React.Component {

constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
  }
state = {
  'id':this.props.solicitud.id
}

handleClick = event => {

var userId1 = event.target.id;
  console.log("miraaaaaaa"+ this.props.solicitud.id);

  this.props.handleSubmit(this.props.solicitud.id);
  
}
//onClick= {this.handleClick(x)}
//var x = this.props.solicitud.id;

    render() {

      

        return (
            <div className="card cartita" >
              <div className="card-header" >
                <h2 className="mb-0">
                  <button className="btn  collapsed" type="button" data-toggle="collapse" data-target=".collapseTwo" aria-expanded="false" >
                    <strong><FormattedMessage id="my_request_number"/> {this.props.solicitud.id}</strong>
                  </button>
                </h2>
              </div>
              <div  className="collapse collapseTwo"  data-parent="#accordionExample">
                <div className="card-body">
                 <p>{this.props.solicitud.about}</p>
                 <p><strong><FormattedMessage id="my_request_fund"/>:</strong> {this.props.solicitud.fondos}</p>
                 <p><strong><FormattedMessage id="my_request_quantity"/>:</strong> {this.props.solicitud.cantidadFaltante}</p>
                 <p><strong><FormattedMessage id="my_request_url_image"/>:</strong> {this.props.solicitud.picture}</p>
                 <p><strong><FormattedMessage id="my_request_registered"/>: </strong>{this.props.solicitud.registered}</p>
                 <button id={this.props.solicitud.id} type="button" onClick = {this.handleClick}  className="btn btn-dark"><FormattedMessage id="my_request_button"/></button>
                </div>
              </div>
            </div>

        );
    }
}