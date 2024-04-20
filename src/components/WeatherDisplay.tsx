
import React,{useState} from 'react';
import WeatherDate from './WeatherDate';
type WeatherDisplayProps = {
    weatherData: {
        temperature: number;
        city: string;
        humidity: number;
        windSpeed: number;
        image: string;
        description: string
    };
    errormsg: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData, errormsg }) => {
    const [unit, setUnit] = useState<string>('metric');
    const { day:today, date:todate, month:tomonth} = WeatherDate();

    const displayTemperature = (temp: number, unit: string) => {
        if (unit === 'imperial') {
            return Math.round((temp * 9) / 5 + 32);
        }
        return Math.round(temp);
    };
    const toggleUnit = () => {
        setUnit(unit === 'metric' ? 'imperial' : 'metric');
    };

    return (
        <>
        <div className="forecast-table">
        <div className="container">
            <div className="forecast-container">
                <div className="today forecast">
                    <div className="forecast-header">
                        <div className="day">{today}</div>
                        <div className="date">{todate} {tomonth}</div>
                    </div> 
                    <div className="forecast-content">
                        <div className="location">{weatherData.city}</div>
                        <div className="degree">
                            <div className="num">{displayTemperature(weatherData.temperature, unit)}°{unit === 'metric' ? 'C' : 'F'}</div>
                            <div className="forecast-icon">
                            <img src={weatherData.image} alt={weatherData.city} />
                            </div>	
                            {errormsg && <p className=' text-[red] text-lg'>{errormsg}</p>}
                        </div>
                        <div className=' flex'>
                        <span><img src="images/icon-umberella.png" alt=""/>{Math.round(weatherData.humidity)}%</span>
                        <span><img src="images/icon-wind.png" alt=""/>{Math.round(weatherData.windSpeed)}km/h</span>
                        <span><img src="images/icon-compass.png" alt=""/>{weatherData.description}</span>
                       </div>
                      <div>
                      <button className=' bg-[#009ad8] text-white p-2 rounded-sm' onClick={toggleUnit}>
                {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
            </button>
                      </div>
                    </div>
                </div>
            </div>
          
        </div>
    </div>

       
    </>
    );
};

export default WeatherDisplay;
