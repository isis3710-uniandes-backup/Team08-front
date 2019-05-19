import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {FormattedMessage} from 'react-intl';
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        id: '',
        cantidadFaltante: '',
        fondos: '',
        picture: '',
        about: '',
        isActive: '',
        cantidadConseguida:'',
        registered:'',
        latitude:'',
        longitude:''


    };

    this.handleidChange = this.handleidChange.bind(this);
    this.handlecantidadChange = this.handlecantidadChange.bind(this);
    this.handledescripcionChange = this.handledescripcionChange.bind(this);
    this.handlefondosChange = this.handlefondosChange.bind(this);
    this.handleurlChange = this.handleurlChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event) {
    event.preventDefault();

    let data = {
        id: parseInt(this.state.id),
        cantidadFaltante: this.state.cantidadFaltante,
        fondos: parseInt(this.state.fondos),
        picture: this.state.picture,
        about: this.state.about,
        isActive: true,
        cantidadConseguida:0,
        registered:'2015-09-08T05:01:49 +05:00',
        latitude:14.012841,
        longitude:-14.437207

    };

        fetch("https://donu-back.herokuapp.com/solicitud", {
            method: 'POST',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error)).then((response)=>{
                window.location.href="/agregar_donacion/hecho";
            });

    } 


handleidChange(event) {
    console.log('handleNameChange', this);
    this.setState({id: event.target.value});
}

handlecantidadChange(event) {
    console.log('handleNameChange', this);
    this.setState({cantidadFaltante: event.target.value});
}

handledescripcionChange(event) {
    console.log('handleNameChange', this);
    this.setState({about: event.target.value});
}
handlefondosChange(event) {
    console.log('handleNameChange', this);
    this.setState({fondos: event.target.value});
}

handleurlChange(event) {
    console.log('handleNameChange', this);
    this.setState({picture: event.target.value});
}

render() {
    return (
        <div>
 <div className="modal-body">
        <form method='POST' onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label for="recipient-name1" className="col-form-label"><FormattedMessage id="my_form_id"/>:</label>
            <input type="text" 
                value={this.state.id}
                onChange={this.handleidChange} className="form-control" id="recipient-name1" required/>
          </div>
          <div className="form-group">
            <label for="recipient-name2" className="col-form-label"><FormattedMessage id="my_form_quantity"/>:</label>
            <input type="text" 
                value={this.state.cantidadFaltante}
                onChange={this.handlecantidadChange} className="form-control" id="recipient-name2" required/>
          </div>

          <div className="form-group">
            <label for="recipient-name3" className="col-form-label"><FormattedMessage id="my_form_funds"/>:</label>
            <input type="text" 
                value={this.state.fondos}
                onChange={this.handlefondosChange} className="form-control" id="recipient-name3" required/>
          </div>
          <div className="form-group">
            <label for="recipient-name4" className="col-form-label"><FormattedMessage id="my_form_url_image"/>:</label>
            <input type="text" 
                value={this.state.picture}
                onChange={this.handleurlChange} className="form-control" id="recipient-name4" required/>
          </div>
          <div className="form-group">
            <label for="message-text" className="col-form-label"><FormattedMessage id="my_form_message"/>:</label>
            <textarea className="form-control" value={this.state.about}
                onChange={this.handledescripcionChange} id="message-text" required></textarea>
          </div>

        <button type='submit' className="btn btn-dark"><FormattedMessage id="my_form_button"/></button>
        </form>
        </div>

        <div className="modal-footer">
        
      </div>
      </div>
        
    );
}
}