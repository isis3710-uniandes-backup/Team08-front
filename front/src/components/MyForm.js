import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        id: '',
        cantidadFaltante: '',
        fondos: '',
        picture: '',
        about: ''

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
        id: this.state.id,
        cantidadFaltante: this.state.cantidadFaltante,
        fondos: this.state.fondos,
        picture: this.state.picture,
        about: this.state.about
    };

   

        fetch("/solicitud", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

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
        <form className='form__row' method='POST' onSubmit={this.handleSubmit}>
            <input
                type="text"
                placeholder="ID"
                value={this.state.id}
                onChange={this.handleidChange}
            />
            <br/>
            <input
                type="text"
                placeholder="CANTIDAD"
                value={this.state.cantidadFaltante}
                onChange={this.handlecantidadChange}
            />
            <br/>
            <input
                type="text"
                placeholder="DESCRIPCIÓN"
                value={this.state.about}
                onChange={this.handledescripcionChange}
            />
            <br/>
            <input
                type="text"
                placeholder="Fondos"
                value={this.state.fondos}
                onChange={this.handlefondosChange}
            />
            <br/>
            <input
                type="text"
                placeholder="URL de la imagen"
                value={this.state.picture}
                onChange={this.handleurlChange}
            />
            <br/>
            <button type='submit'>save</button>
        </form>
    );
}
}