import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";


const API_KEY = "8db095c3b8cf54d4a0f8edeeb55c14ba";

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
}

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_call.json();

            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: sunset_date,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: undefined
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                humidity: undefined,
                description: undefined,
                error: "Введите название города",
            })
        }
    }

    render() {


        return (
            <div>
                <Info/>
                <Form getWeather={this.getWeather} />
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunset={this.state.sunset}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />

            </div>
        );
    }
}

export default App;