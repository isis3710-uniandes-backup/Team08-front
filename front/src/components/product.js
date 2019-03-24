import React from 'react';

export default class Product extends React.Component {


    render() {
        return (
            <div className="card col-lg-4 col-md-3 col-sm-1">
                <div className="text-center">
                    <img src={this.props.product.url_img} alt={this.props.product.name} width="150px;" height="150px" />
                    <h5 className="card-title">{this.props.product.name}</h5>
                    <p className="card-text">{this.props.product.description}</p>
                </div>
            </div>
        );
    }
}