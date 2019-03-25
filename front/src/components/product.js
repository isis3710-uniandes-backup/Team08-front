import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Product extends React.Component {


    render() {
        return (
           
              <div i className="grid-item">
    <Link to="" className="view-product">
      <img  id = "prueba" src={this.props.product.url_img}/>
      <h2 className={this.props.product.name}></h2>
      <h3 className="price">{this.props.product.description}</h3>
      <h3 className="price">Calidad: {this.props.product.calidad}</h3>
      
    </Link>
    </div>
        );
    }
}