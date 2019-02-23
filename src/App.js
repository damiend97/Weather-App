import React, { Component } from 'react';
import WeatherCard from './components/WeatherCard';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',].map((day, i) => ({
                day,
                temp: (100 - (i*10))
            }))
        }
    }

    render() {
        return (
            <div className="App">
                <div className="cards">
                    {this.state.data.map(card => <WeatherCard key={card.day} data={card}></WeatherCard>)}
                </div>
            </div>
        );
    }
}
export default App;