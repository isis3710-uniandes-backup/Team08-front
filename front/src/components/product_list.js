import React from 'react';
import Product from './product.js'

export default class ProductList extends React.Component {

    state = {
    	"product_list":[
    		{"_id": "1",  "url_img": "http://www.prolaboral.es/WebRoot/StoreES/Shops/63783229/5123/5393/DEC2/730E/A3C6/C0A8/28B8/6AA8/camiseta-tecnica-hombre-montecarlo-amarillo-fluor.jpg","name": "Camiseta amarilla", "calidad": "3", "description":"Una camiseta muy linda." },
    		{"_id": "2", "url_img": "https://www.tenemosdetodo.com.ec/1041-large_default/carro-juguete-jeep-qbaby-520.jpg", "name": "Carro de juguete", "calidad": "4", "description":"Una carro de control a pilas." },
    		{"_id": "3", "url_img": "https://www.luciabe.com/4981-thickbox_default/libro-no-me-da-la-vida.jpg", "name": "No me da la vida", "calidad": "5", "description":"Un excelente libro en buenas condiciones." },
    		{"_id": "4", "url_img": "https://gioseppo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/1/41446-negro-31188h_0001-copia.jpg", "name": "Zapatos", "calidad": "1", "description":"Viejos zapatos negros." },
    		{"_id": "5", "url_img": "https://http2.mlstatic.com/buso-con-capucha-gildan-estampado-personalizado-stranger-th-S_815336-MCO26226269942_102017-F.jpg", "name": "Camiseta gris", "calidad": "5", "description":"Una camiseta de una serie entretenida." },
    		{"_id": "6", "url_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXGrWkztc7OpTc08zpohtIwifTlYO3fys-IBFaZMI62LLX4LE", "name": "Almohada", "calidad": "5", "description":"Tres almohadas." }
		]
	}

	// componentDidMount() {
 //        fetch('/articulos')
 //            .then(function(response) {          	
 //                return response.json();
 //            })
 //            .then(myJson => {
 //            	console.log(myJson);
 //            	var count = 0;
 //            	var products=[];
 //            	for(var product of myJson){
	// 				if (count>5){
	// 					break;
	// 				}
	// 				products.push(product)
 //            	}
 //                this.setState({product_list:products});               
 //                console.log(this.state.product_list);
 //            });
 //    }

    renderProducts() {
        return this.state.product_list.map((p) => (<Product key={p._id} product={p}/>));
    }

    show_all_product(){
		window.location.href='add_product.html';
    }

    render() {
        return (
        	<div className="container">
        		<div className="row">
                    <div className="col-12"><h2 className="text-center">Productos</h2></div>
                    <div className="col-12">
                        <div class="grid-container d-flex align-items-stretch"> 
                            {this.renderProducts()}
                        </div>
                    </div>
                    <div className="col-12 text-center"><button type="button" onClick={this.show_all_product} className="btn btn-dark">Donar</button></div>
                </div>
        	</div>
            
        );
    }
}