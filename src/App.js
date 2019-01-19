import React from 'react';

import Titles from './components/Titles'
import Forms from './components/Form'
import Wheather from './components/Wheather'

const API_KEY = "6dc71c2e81850a1ea5be9adef9e62e0e"

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        humdidity: undefined,
        desription: undefined,
        error: undefined,
    }
    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=' + API_KEY
        );
        const data = await api_call.json();

        console.log(data);
        if (city === true) {
            this.setState({
                temperature: data.main.temp,
                humdidity: data.main.humidity,
                city: data.name,
                desription: data.weather[0].description,
                error:undefined
            })
        }
        else
        {
            this.setState({
                temperature: undefined,
                humdidity: undefined,
                city: undefined,
                desription: undefined,
                error:'Please entry the value in city'
            })
        }
    }
    render() {
        return (
            <div>
                <Titles />
                <Forms getWeather={this.getWeather} />
                <Wheather temperature={this.state.temperature}
                    city={this.state.city}
                    humidity={this.state.humdidity}
                    desription={this.state.desription}
                    error={this.state.error}

                />
            </div>
        );
    }
}

export default App;