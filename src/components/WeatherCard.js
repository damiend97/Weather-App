import sunny from '../img/sunny.png';
import partly from '../img/partly.png';
import cloudy from '../img/cloudy.png';
import rainy from '../img/rainy.png';

import React, { Component } from 'react';

class WeatherCard extends Component {
    constructor(props) {
        super(props)

        const { day, temp } = props.data

        this.state = {
            day,
            temp,
            ...this.getData(temp)
        }
    }

    getData = temp => {
        return [
            {
                value: 95,
                description: 'Sunny',
                image: sunny
            },
            {
                value: 85,
                description: 'Partly Cloudy',
                image: partly
            },
            {
                value: 75,
                description: 'Cloudy',
                image: cloudy
            },
            {
                value: -Infinity,
                description: 'Rainy',
                image: rainy
            },
        ].find(weather => temp >= weather.value)
    }

    changeTemp = value => ev => {
        this.setState(prevState => ({ 
            temp: prevState.temp + value,
            ...this.getData(prevState.temp + value)
        }))
    }

    render() {
        const { day } = this.props.data
        const { temp, image, description } = this.state

        return (
            <div className="card">
                <div className="card-head">{day}</div>
                <div className="card-body">
                    <h1>{temp}</h1>
                    <img src={image} alt={description}></img>
                    <p>{description}</p>
                </div>
                <div className="controls">
                    <div className="upButton" onClick={this.changeTemp(1)}>+</div>
                    <div className="downButton" onClick={this.changeTemp(-1)}>-</div>
                </div>
            </div>
        )
    }
}

export default WeatherCard;