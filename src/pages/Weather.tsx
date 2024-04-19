import React, { useEffect } from 'react';

import SearchForm from '../components/SearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import RecentSearches from '../components/RecentSearches';
import WeatherApi from '../components/api/weather-api';
import Footer from '../components/Footer';

const Weather: React.FC = () => {
    const {weatherDatas:weatherData, errMsg: error, handlRequest: handleSubmit, recentSearch: recentSearches, setRSearch: setRecentSearches} = WeatherApi()
   

    useEffect(() => {
        const storedSearches = localStorage.getItem('recentSearches');
        if (storedSearches) {
            setRecentSearches(JSON.parse(storedSearches));
        }
    }, []);

   useEffect(() => {
   handleSubmit
   }, [])

   

    
  

    return (
        <div>
            <div className="site-header">
				<div className="container">
					<a href="index.html" className="branding">
						<img src="images/logo.png" alt="" className="logo"/>
						<div className="logo-type">
							<h1 className="site-title">Devee Forecast</h1>
							<small className="site-description">stay updated on weather condition around you.</small>
						</div>
					</a>
					</div>
			</div> 
            <SearchForm onSubmit={handleSubmit}/>
            <WeatherDisplay weatherData={weatherData} errormsg={error} />
           
            <RecentSearches recentSearches={recentSearches} />
            <Footer/>
            
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
