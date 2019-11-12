import React from 'react';
import Info from "./components/info";
import Form from './components/form';
import Weather from "./components/weather";


const API_KEY = "8db095c3b8cf54d4a0f8edeeb55c14ba";



function App() {

   //  state = {
     //   temp: undefined;
       // city: undefined;
        //country: undefined;
        //sunrise: undefined;
        //sunset: undefined;
        //error: undefined;
    //}

let gettingWeather;
    gettingWeather = async (e) => {
       e.preventDefault();
       const city = e.target.elements.value;
       const api_url = await
           fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
       const data = await api_url.json();

       console.logdata);

/*
       if (city) {

           this.setState({
               temp: data.main.temp,
               city: data.name,
               country: data.sys.country,
               sunrise: data.sys.sunrise,
               sunset: data.sys.sunset,
               error: ''
           })
       }*/
   }

        return (
            <header>
                <Info/>
                <Form weatherMethod = {gettingWeather}/>
                <Weather/>

            </header>
        );
    }

export default App;
