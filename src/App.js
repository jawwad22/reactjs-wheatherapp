import React from 'react';

import Titles from './components/Titles'
import Forms from './components/Form'
import Wheather from './components/Wheather'

const API_KEY="6dc71c2e81850a1ea5be9adef9e62e0e"

class App extends React.Component {
    getWeather= async () => {
        const api_call= await fetch(
            'http://maps.openweathermap.org/maps/2.0/weather?q=karachi,uk&appid=${API_KEY}&unites=metric'
        
        );
    }
    render() {
        return (
            <div>
                <Titles />
                <Forms />
                <Wheather />
            </div>
        );
    }
}

export default App;