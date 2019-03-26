import React from 'react';

export default class FormProduct extends React.Component {
	state ={
		"alert":""
	}
	agregar_donacion=(event)=> {
	    var donacion = {
	      "id":Math.floor(Math.random()* (20000 - 2000 + 1)) + 2000,
	      "name":document.getElementById("product_name").value,
	      "url_img":document.getElementById("url_img").value,
	      "quality":document.getElementById("quality").value,
	      "description":document.getElementById("description").value
	    };

	    if (donacion.name != "" && donacion.url_img !="" && donacion.quality != "" && donacion.description != ""){
			fetch('/articulos/',{
		      method:'POST',
		      body:JSON.stringify(donacion),
		      headers:{
		        'Content-Type': 'application/json'
		      }
		      })
		      .then(res2 =>res2.json())
		      .catch(error2 => console.error('Error:', error2))
		      .then(response =>{
		        window.location.href="/agregar_donacion/hecho";
		    })
	    }
	    else{
	    	console.log('hola');
	    	event.preventDefault();
	    	this.setState({alert:'Debes llenar todos los campos'});

	    }
	    event.preventDefault();
    }
	
	render(){
		return (
			<form onSubmit={this.agregar_donacion}>
		        <div>
	               <h4 className="text-left">Datos de la donacion</h4>
	                <div className="form-row">
	                    <div className="col-lg-8 col-md-8 col-sm-10 form-group">
	                      <input id="product_name" type="text" className="form-control" placeholder="Nombre del producto"/>
	                    </div>
	                    <div className="col-lg-4 col-md-4 col-sm-2 form-group">
	                      <select id="quality" className="custom-select">
	                        <option defaultValue>Calidad</option>
	                        <option>1</option>
	                        <option>2</option>
	                        <option>3</option>
	                        <option>4</option>
	                        <option>5</option>
	                      </select>
	                    </div>
	                    <div className="col-12 form-group">
	                      <textarea id="description" type="text" className="form-control" placeholder="Descripción"></textarea>
	                    </div>
	                    <div className="col-12 form-group">
	                      <input id="url_img" type="text" className="form-control" placeholder="URL de la imagen"/>
	                      <small id="imageHelp" class="form-text text-muted">Su imagen debe ser de 500px * 500px</small>
	                    </div>
	                </div> 
	            </div>
		        <br/>
		        <p>{this.state.alert}</p>
		        <br/>
		        <input type="submit" className="btn btn-dark" value="Donar"/>
	        </form>
	    );
	}
}