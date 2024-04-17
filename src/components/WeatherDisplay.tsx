
import React from 'react';

type WeatherDisplayProps = {
    weatherData: {
        temperature: number;
        city: string;
        humidity: number;
        windSpeed: number;
        image: string;
    };
    unit: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData, unit }) => {
    const displayTemperature = (temp: number, unit: string) => {
        if (unit === 'imperial') {
            return Math.round((temp * 9) / 5 + 32);
        }
        return Math.round(temp);
    };

    return (
        <div>
            <img src={weatherData.image} alt={weatherData.city} />
            <h1>{displayTemperature(weatherData.temperature, unit)}°{unit === 'metric' ? 'C' : 'F'}</h1>
            <h2>{weatherData.city}</h2>
            <div>
                <p>Humidity: {Math.round(weatherData.humidity)}%</p>
                <p>Wind: {Math.round(weatherData.windSpeed)} km/h</p>
            </div>
        </div>
    );
};

export default WeatherDisplay;
