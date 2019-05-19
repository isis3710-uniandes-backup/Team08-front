import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {FormattedMessage} from 'react-intl';
import * as d3 from "d3";
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LiquidFillGauge from 'react-liquid-gauge';

export default class points extends React.Component {

  state = {
        value: 25, value1:75
    };
    startColor = '#6495ed'; // cornflowerblue
    endColor = '#dc143c'; // crimson

    componentWillMount(){


        
    }

componentDidMount() {
       // fetch('https://donu-back.herokuapp.com/benefit/5c7b3dd2006bf3210b17262f',{
         //   method:'GET',
         //   headers:{
          //      'Content-Type':'application/json',
          //      'Authorization':'Bearer '+localStorage.getItem('token')
         //   }
      //  })
         //   .then(function(response) {              
          //      return response.json();
         //   })
         //   .then(myJson => {

           //     var value2 = myJson.pointsValue;
            //    var value3 = myJson.stock;
                
            //    this.setState({value:value2, value1: value3});               
            //    console.log(this.state);

          //  });

          

    }
    render() {
        const radius = 300;
        const interpolate = interpolateRgb(this.startColor, this.endColor);
        const fillColor = interpolate(this.state.value / 100);
        const fillColor1 = interpolate(this.state.value1 / 100);
        const gradientStops = [
            {
                key: '0%',
                stopColor: color(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];
         const gradientStops1 = [
            {
                key: '0%',
                stopColor: color(fillColor1).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor1,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor1).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];
          

        return (
            <div>
            <h2>Points accumulated/Stock</h2>
<br/>
            <div className = "row">
            
                <LiquidFillGauge id= "izq" className= "col-md"
                    style={{ margin: '0 auto' }}
                    width={radius }
                    height={radius }
                    value={this.state.value}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                    textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(props.height / 2, props.width / 2);
                        const textPixels = (props.textSize * radius / 2);
                        const valueStyle = {
                            fontSize: textPixels
                        };
                        const percentStyle = {
                            fontSize: textPixels * 0.6
                        };

                        return (
                            <tspan>
                                <tspan className="value" style={valueStyle}>{value}</tspan>
                                <tspan style={percentStyle}>{props.percent}</tspan>
                            </tspan>
                        );
                    }}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={1}
                    gradient
                    gradientStops={gradientStops}
                    circleStyle={{
                        fill: fillColor
                    }}
                    waveStyle={{
                        fill: fillColor
                    }}
                    textStyle={{
                        fill: color('#444').toString(),
                        fontFamily: 'Arial'
                    }}
                    waveTextStyle={{
                        fill: color('#fff').toString(),
                        fontFamily: 'Arial'
                    }}
                    onClick={() => {
                        this.setState({ value: Math.random() * 100 });
                    }}
                />
                 <LiquidFillGauge id= "der" className= "col-md"
                    style={{ margin: '0 auto' }}
                    width={radius }
                    height={radius }
                    value={this.state.value1}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                    textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(props.height / 2, props.width / 2);
                        const textPixels = (props.textSize * radius / 2);
                        const valueStyle = {
                            fontSize: textPixels
                        };
                        const percentStyle = {
                            fontSize: textPixels * 0.6
                        };

                        return (
                            <tspan>
                                <tspan className="value" style={valueStyle}>{value}</tspan>
                                <tspan style={percentStyle}>{props.percent}</tspan>
                            </tspan>
                        );
                    }}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={1}
                    gradient
                    gradientStops1={gradientStops1}
                    circleStyle={{
                        fill: fillColor1
                    }}
                    waveStyle={{
                        fill: fillColor1

                    }}
                    textStyle={{
                        fill: color('#444').toString(),
                        fontFamily: 'Arial'
                    }}
                    waveTextStyle={{
                        fill: color('#fff').toString(),
                        fontFamily: 'Arial'
                    }}
                    onClick={() => {
                        this.setState({ value1: Math.random() * 100 });
                    }}
                />
                
                   <br/>
                </div>
               
                
            </div>
           
        );
    }
}

