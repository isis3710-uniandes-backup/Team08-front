import React from 'react';
import Donacion from './donacion.js'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
export default class ListaDonacion extends React.Component {

    state = {
    	"donacion_lista":[
    		{"id": "1",  "url_img": "http://www.prolaboral.es/WebRoot/StoreES/Shops/63783229/5123/5393/DEC2/730E/A3C6/C0A8/28B8/6AA8/camiseta-tecnica-hombre-montecarlo-amarillo-fluor.jpg","name": "Camiseta amarilla", "quality": "3", "description":"Una camiseta muy linda." },
    		{"id": "2", "url_img": "https://www.tenemosdetodo.com.ec/1041-large_default/carro-juguete-jeep-qbaby-520.jpg", "name": "Carro de juguete", "quality": "4", "description":"Una carro de control a pilas." },
    		{"id": "3", "url_img": "https://www.luciabe.com/4981-thickbox_default/libro-no-me-da-la-vida.jpg", "name": "No me da la vida", "quality": "5", "description":"Un excelente libro en buenas condiciones." },
    		{"id": "4", "url_img": "https://gioseppo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/1/41446-negro-31188h_0001-copia.jpg", "name": "Zapatos", "quality": "1", "description":"Viejos zapatos negros." },
    		{"id": "5", "url_img": "https://http2.mlstatic.com/buso-con-capucha-gildan-estampado-personalizado-stranger-th-S_815336-MCO26226269942_102017-F.jpg", "name": "Camiseta gris", "quality": "5", "description":"Una camiseta de una serie entretenida." },
    		{"id": "6", "url_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXGrWkztc7OpTc08zpohtIwifTlYO3fys-IBFaZMI62LLX4LE", "name": "Almohada", "quality": "5", "description":"Tres almohadas." }
		]
	}

	componentDidMount() {
        fetch('/articulos')
            .then(function(response) {          	
                return response.json();
            })
            .then(myJson => {
            	var count = this.props.max;
            	var donaciones=[];
            	for(var donacion of myJson){
					if (count==0){
						break;
					}
					donaciones.push(donacion);
                    count-=1;
            	}
                this.setState({donacion_lista:donaciones});   
            });
    }

    renderProducts() {
        return this.state.donacion_lista.map((p) => (<Donacion key={p.id} donacion={p}/>));
    }

    User(){
        return (<h2>User</h2>);
    }

    render() {
        return (
        	<div className="text-center">
                <div className="row"> 
                    {this.renderProducts()}
                </div>
        	</div>
            
        );
    }
}