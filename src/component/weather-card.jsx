import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/weather-card.css';

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Get user's geolocation
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(latitude, longitude);
            },
            (err) => {
                setError(err.message);
                setLoading(false);
            }
        );
    }, []);

    const fetchWeatherData = async (lat, lon) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/weather?lat=${lat}&lon=${lon}`);
            setWeatherData(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weatherData) {
        return null;
    }

    const { name, main, wind, sys } = weatherData;
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

    return (
        <div className='weathercard'>
            <h2 id='city'>{name}</h2>
            <div className='box1'>
                <h2>Sunrise: {sunrise}</h2>
                <h2>Sunset: {sunset}</h2>
            </div>
            <div className="box2">
                <div className="param1">
                    <h2>Humidity: {main.humidity}%</h2>
                    <h2>Wind Speed: {wind.speed} m/s</h2>
                </div>
                <div className="param2">
                    <h2>Temperature: {main.temp}°C</h2>
                    <h2>Pressure: {main.pressure} hPa</h2>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
