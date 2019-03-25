import React from 'react';

export default class Product extends React.Component {


    render() {
        return (
           
              <div i className="grid-item">
    <a href="#" className="view-product">
      <img  id = "prueba" src={this.props.product.url_img}/>
      <h2 className={this.props.product.name}></h2>
      <h3 className="price">{this.props.product.description}</h3>
      <h3 className="price">Calidad: {this.props.product.calidad}</h3>
      
    </a>
    </div>
        );
    }
}