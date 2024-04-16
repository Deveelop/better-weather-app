
import React from 'react';

type WeatherDisplayProps = {
    weatherData: {
        temperature: number;
        city: string;
        humidity: number;
        windSpeed: number;
        image: string;
        description: string
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
        <>
        <div className="forecast-table">
        <div className="container">
            <div className="forecast-container">
                <div className="today forecast">
                    <div className="forecast-header">
                        <div className="day">Monday</div>
                        <div className="date">6 Oct</div>
                    </div> 
                    <div className="forecast-content">
                        <div className="location">{weatherData.city}</div>
                        <div className="degree">
                            <div className="num">{displayTemperature(weatherData.temperature, unit)}°{unit === 'metric' ? 'C' : 'F'}</div>
                            <div className="forecast-icon">
                            <img src={weatherData.image} alt={weatherData.city} />
                            </div>	
                           
                        </div>
                        <span><img src="images/icon-umberella.png" alt=""/>{Math.round(weatherData.humidity)}%</span>
                        <span><img src="images/icon-wind.png" alt=""/>{Math.round(weatherData.windSpeed)}km/h</span>
                        <span><img src="images/icon-compass.png" alt=""/>{weatherData.description}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/*<div>
            <img src={weatherData.image} alt={weatherData.city} />
            <h1>{displayTemperature(weatherData.temperature, unit)}°{unit === 'metric' ? 'C' : 'F'}</h1>
            <h2>{weatherData.city}</h2>
            <div>
                <p>Humidity: {Math.round(weatherData.humidity)}%</p>
                <p>Wind: {Math.round(weatherData.windSpeed)} km/h</p>
                <p>description: {weatherData.description}</p>
            </div>
    </div>*/}
    </>
    );
};

export default WeatherDisplay;
