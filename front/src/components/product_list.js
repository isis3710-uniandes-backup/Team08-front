import React from 'react';
import Product from './product.js'

export default class ProductList extends React.Component {

    status = {"product_list": [
    		{"_id": "1", "url_img": "/images/camiseta.jpg", "name": "Camiseta amarilla", "calidad": "3", "description":"Una camiseta muy linda." },
    		{"_id": "2", "url_img": "/images/carro_de_juguete.jpg", "name": "Carro de juguete", "calidad": "4", "description":"Una carro de control a pilas." }
    	] 
	}

    renderProducts() {
        return this.status.product_list.map((p) => (<Product key={p._id} product={p}/>));
    }

    render() {
        return (
        	<div>
        		<h2 className="text-center">Productos</h2>
				<div id="product_list" className="row">
        			{this.renderProducts()}
    			</div>
    			<button type="button" className="btn btn-info">+</button>
        	</div>
            
        );
    }
}