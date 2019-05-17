import React from 'react';
import Donacion from './donacion.js'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
export default class ListaDonacion extends React.Component {

    state = {
    	"donacion_lista":[]
	}

	componentDidMount() {
        fetch('/articulos',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
        .catch(error=>console.log(error))
        .then(response=> response.json())
        .then(myJson => {
            console.log('dfsfasdfa');
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