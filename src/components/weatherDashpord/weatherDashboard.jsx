import React, { useState } from 'react';
import TemperatureToggle from '../TemperatureToggle';
import CitySearch from '../CitySearch';
import CurrentWeather from '../CurrentWeather';
import WeatherForecast from '../WeatherForecast';



function WeatherDashboard() {
  const [city, setCity] = useState(''); // State for the selected city
  const [unit, setUnit] = useState('C'); // State for temperature unit

  // Static weather data for demonstration
  const weatherData = {
    Larkana: { current: { temp: 30, humidity: 60, wind: 10, condition: 'Clear', cloudCover: 20 }, forecast: [32, 31, 30, 29, 28] },
    Islamabad: { current: { temp: 34, humidity: 50, wind: 12, condition: 'Partly Cloudy', cloudCover: 30 }, forecast: [33, 32, 31, 30, 29] },
    Hyderabad: { current: { temp: 35, humidity: 55, wind: 14, condition: 'Sunny', cloudCover: 10 }, forecast: [36, 35, 34, 33, 32] },
    Quetta: { current: { temp: 31, humidity: 52, wind: 11, condition: 'Cloudy', cloudCover: 60 }, forecast: [30, 29, 28, 27, 26] },
    Karachi: { current: { temp: 29, humidity: 65, wind: 15, condition: 'Overcast', cloudCover: 80 }, forecast: [30, 29, 28, 27, 26] },
  };

  // Fetching current weather and forecast based on the city
  const currentWeather = city && weatherData[city] ? weatherData[city].current : null;
  const forecast = city && weatherData[city] ? weatherData[city].forecast : null;

  // Function to handle city search
  const handleCitySearch = (newCity) => {
    setCity(newCity); // Update city state
  };

  // Function to handle temperature unit toggle
  const handleToggleUnit = (newUnit) => {
    setUnit(newUnit); // Update unit state
  };

  return (
    <div className='backImg pt-3'>
    <div className="container p-4 mt-1 border rounded shadow-sm bg-img" 
         style={{ 
             background: 'linear-gradient(135deg, rgba(113, 211, 224, 0.5), rgba(192, 128, 234, 0.5))',
             maxWidth: '800px', // Set the maximum width here
             margin: '0 auto' // Center the container
         }}
    >
        <h1 className="text-center mb-4" style={{ color: '#0d47a1' }}>Weather Dashboard</h1>
        <hr />
        <div className="mb-4">
            <CitySearch onSearch={handleCitySearch} />
        </div>
        <div className="mb-4">
            <TemperatureToggle unit={unit} onToggle={handleToggleUnit} />
        </div>
        {currentWeather && (
            <div className="mb-4">
                <CurrentWeather weather={currentWeather} unit={unit} />
            </div>
        )}
        {forecast && (
            <div className="p-3 rounded" style={{ background: '#e3f2fd', border: '1px solid #90caf9' }}>
                <WeatherForecast forecast={forecast} unit={unit} />
            </div>
        )}
    </div>
</div>



  );
}

export default WeatherDashboard;
