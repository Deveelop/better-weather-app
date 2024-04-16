// Weather.tsx
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import SearchForm from '../components/SearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import RecentSearches from '../components/RecentSearches';

const Weather: React.FC = () => {
    const [weatherData, setWeatherData] = useState<{
        temperature: number;
        city: string;
        humidity: number;
        windSpeed: number;
        image: string;
        description: string
    }>({
        temperature: 0,
        city: '',
        humidity: 0,
        windSpeed: 0,
        image: '/images/clouds.png',
        description: 'Clear'
    });
    const [error, setError] = useState<string>('');
    const [unit, setUnit] = useState<string>('metric'); // Default unit is Celsius
    const [recentSearches, setRecentSearches] = useState<string[]>([]);

    useEffect(() => {
        const storedSearches = localStorage.getItem('recentSearches');
        if (storedSearches) {
            setRecentSearches(JSON.parse(storedSearches));
        }
    }, []);

    const handleSubmit = async (searchQuery: string) => {
        if (searchQuery.trim() !== '') {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=cf20293f61b6a0f965d23f1e2a5a629d&units=${unit}`);
                const weather = res.data;
                console.log(weather)
                const imagePath = getWeatherImage(weather.weather[0].main);
                setWeatherData({
                    temperature: weather.main.temp,
                    city: weather.name,
                    humidity: weather.main.humidity,
                    windSpeed: weather.wind.speed,
                    image: imagePath,
                    description: weather.weather[0].description
                });
                setError('');
                updateRecentSearches(searchQuery);
            } catch (err) {
                if ((err as AxiosError).response && (err as AxiosError).response?.status === 404) {
                    setError('City not found.');
                } else {
                    setError('An error occurred. Please try again later.');
                }
            }
        }
    };

    const updateRecentSearches = (city: string) => {
        const updatedSearches = [city, ...recentSearches.filter(search => search !== city)].slice(0, 5);
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    };

    const toggleUnit = () => {
        setUnit(unit === 'metric' ? 'imperial' : 'metric');
    };

    const getWeatherImage = (weatherMain: string) => {
        switch (weatherMain) {
            case 'Clear':
                return '/images/icons/icon-1.svg';
            case 'Rain':
                return '/images/icons/icon-2.svg';
            case 'Drizzle':
                return '/images/icons/icon-3.svg';
            case 'Mist':
                return '/images/icons/icon-4.svg';
            default:
                return '/images/icons/icon-1.svg';
        }
    };

    return (
        <div>
            <div className="site-header">
				<div className="container">
					<a href="index.html" className="branding">
						<img src="images/logo.png" alt="" className="logo"/>
						<div className="logo-type">
							<h1 className="site-title">Devee Focast</h1>
							<small className="site-description">stay update on weather condition around you.</small>
						</div>
					</a>
					</div>
			</div> 
            <SearchForm onSubmit={handleSubmit}/>
            <WeatherDisplay weatherData={weatherData} unit={unit} />
            {error && <p>{error}</p>}
            <RecentSearches recentSearches={recentSearches} />

            
      {/*<div>
            <SearchForm onSubmit={handleSubmit} />
            <button onClick={toggleUnit}>
                {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
            </button>
            <RecentSearches recentSearches={recentSearches} />
            {error && <p>{error}</p>}
            <WeatherDisplay weatherData={weatherData} unit={unit} />
    </div>*/}
    </div>
    );
};

export default Weather;
