
import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {FormattedMessage} from 'react-intl';

export default class points extends React.Component {

    state = {
        "benefits_list":[]
    }

componentDidMount() {
        fetch('/benefit/5c7b3dd2006bf3210b17262f',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
            .then(function(response) {              
                return response.json();
            })
            .then(myJson => {
                
                this.setState({benefits_list:myJson});               
                console.log(this.state.benefits_list);
            });
    }
  render() {
    //debugger;
    return (
        <div>
            <h2><FormattedMessage id="accumulated_points"/></h2>
            <br/>
            <h3><FormattedMessage id="accumulated_points_value"/></h3>
            <br/>
            <div className="progress">
              <div id= "barra1" className="progress-bar " role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.state.benefits_list.pointsValue}</div>
            </div>
            <br/>
            <h3><FormattedMessage id="accumulated_points_stock"/></h3>
            <br/>
            <div className="progress">
              <div id= "barra2" className="progress-bar " role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.state.benefits_list.stock}</div>
            </div>
            <br/>
            <br/>
        </div>
    );
  }
}


