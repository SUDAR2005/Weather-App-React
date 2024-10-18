import React, { useState } from 'react';
import '../style/header.css';
import InputComponent from './input-component';
import NavBar from './nav-bar';
import axios from 'axios';
import { Modal, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Modal styling
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    backgroundColor: '#ccc',
    borderRadius: '4px',
    boxShadow: 24,
    padding: '20px',
    textAlign: 'center',
    outline: 'none',
};

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navItems = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Services', link: '/services' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
    const [weatherData, setWeatherData] = useState(null);
    const [open, setOpen] = useState(false);

    const cityNames = [
        'Madurai', 'Chennai', 'Bangalore', 'Mumbai', 
        'Delhi', 'Kolkata', 'Hyderabad', 'Pune', 
        'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow'
    ];

    const handleSearchChange = (event) => {
        const input = event.target.value;
        setSearchTerm(input);
        setFilteredCities(cityNames.filter(city => 
            city.toLowerCase().includes(input.toLowerCase())
        ));
    };

    const handleCityClick = async (city) => {
        setSearchTerm(city);
        setFilteredCities([]);

        try {
            const response = await axios.get(`http://localhost:8000/api/weather/city?city=${city}`);
            setWeatherData(response.data);
            setOpen(true);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='header'>
            <h1>Climate <sup>-1</sup></h1>
            <NavBar arr={navItems} />
            <InputComponent 
                type='text' 
                holder='Search City' 
                onChange={handleSearchChange} 
                value={searchTerm}
            />
            {searchTerm && filteredCities.length > 0 && (
                <ul className="city-list">
                    {filteredCities.map((city, index) => (
                        <li key={index} onClick={() => handleCityClick(city)}>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
            {!isLoggedIn ? ( 
                <Button variant="contained" color="#ccc" onClick={() => { window.location.href = '/login'; }}>
                    Login
                </Button>
            ) : (
                <Button variant="contained" color="secondary" onClick={() => setIsLoggedIn(false)}>
                    Logout
                </Button>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {weatherData && (
                        <div className="weather-details">
                            <h2>{weatherData.name}</h2>
                            <p>Temperature: {weatherData.main.temp}°C</p>
                            <p>Humidity: {weatherData.main.humidity}%</p>
                            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                            <p>Pressure: {weatherData.main.pressure} hPa</p>
                            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default Header;
