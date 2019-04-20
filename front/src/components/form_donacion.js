import React from 'react';
import {FormattedMessage} from 'react-intl';

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
	    	event.preventDefault();
	    	this.setState({alert:'Debes llenar todos los campos'});

	    }
	    event.preventDefault();
    }
	
	render(){
		return (
			<form onSubmit={this.agregar_donacion}>
		        <div>
	               <p className="text-left acercah5"><FormattedMessage id="donate_title"/></p>
	                <div className="form-row">
	                    <div className="col-lg-8 col-md-8 col-sm-10 form-group nobordeazul">
		                    <FormattedMessage id="donate_form_name">
		                    {placeholder=>
		                      <input  id="product_name" type="text" className="form-control " aria-label="nombre" placeholder={placeholder} required/>
		                    }
		                    </FormattedMessage>
	                    </div>
	                    <div className="col-lg-4 col-md-4 col-sm-2 form-group blanquito">
		                    <FormattedMessage id="donate_form_quality">
			                {placeholder=>
		                      <input id ="quality"  aria-label="calidad" className=" form-control" type="number" name="quantity" min="1" max="5" placeholder={placeholder} required/>
		                    }
			                </FormattedMessage>
	                    </div>
	                    <div className="col-12 form-group">
	                    	<FormattedMessage id="donate_form_description">
		                    {placeholder=>
	                      		<textarea id="description" aria-label="descripción" type="text" className="form-control" placeholder={placeholder} required></textarea>
	                    	}
		                	</FormattedMessage>
	                    </div>
	                    <div className="col-12 form-group">
	                    	<FormattedMessage id="donate_form_url_image">
		                    {placeholder=>
	                      		<input id="url_img" aria-label="imagen" type="text" className="form-control" placeholder={placeholder} required/>
	                      	}
		                    </FormattedMessage>
	                      <small id="imageHelp" className="form-text text-muted"><FormattedMessage id="donate_form_advise"/></small>
	                    </div>
	                </div> 
	            </div>
		        <br/>
		        <p>{this.state.alert}</p>
		        <br/>
		        <FormattedMessage id="donate_button">
		        {placeholder=>
		        	<input aria-label="enviar" type="submit" className="btn btn-dark" value={placeholder} />
		        }
		        </FormattedMessage>
	        </form>
	    );
	}
}