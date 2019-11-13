import React from 'react';

class Weather extends React.Component {
    render() {

        return (
            <div>
                {this.props.city &&
                <div>

                    <p>Местоположение: {this.props.city}, {this.props.country}</p>
                    <p>Температура: {this.props.temperature}</p>
                    <p>Давление: {this.props.pressure}</p>
                    <p>Заход солнца: {this.props.sunset}</p>
                    <p>Влажность: {this.props.humidity}</p>
                    <p>Описание: {this.props.description}</p>
                </div>
                }
                <p> {this.props.error}</p>
            </div>
        )
    }
}
export default Weather;


{/*
*/}
