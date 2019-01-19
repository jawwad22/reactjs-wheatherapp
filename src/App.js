import React from 'react';

import Titles from './components/Titles'
import Forms from './components/Form'
import Wheather from './components/Wheather'

const API_KEY="6dc71c2e81850a1ea5be9adef9e62e0e"

class App extends React.Component {
    state={
        temperature:undefined,
        city:undefined,
        humdidity:undefined,
        desription:undefined,
        error:undefined,
    }
    getWeather= async (e) => {
        e.preventDefault()
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
        const api_call= await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID='+API_KEY
        );
        const data =await api_call.json();

        console.log(data);
        this.setState({
            temperature:data.main.temp,
            humdidity:data.main.humdidity,
            city:data.name,
            desription:data.weather[0].desription
        })
    }
    render() {
        return (
            <div>
                <Titles />
                <Forms getWeather={this.getWeather}/>
                <Wheather temperature={this.state.temperature}
                city={this.state.city}
                humdidity={this.state.humdidity}
                desription={this.state.desription}
                
                 />
            </div>
        );
    }
}

export default App;