import React, { useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import RecentSearches from '../components/RecentSearches';
import WeatherApi from '../components/api/weather-api';
import Header from '../components/Header';
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
           <Header/>
            <SearchForm onSubmit={handleSubmit}/>
            <WeatherDisplay weatherData={weatherData} errormsg={error} />
           
            <RecentSearches recentSearches={recentSearches} />
            <Footer/>
            
     
    </div>
    );
};

export default Weather;
