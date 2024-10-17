import React, { useState } from 'react';
import '../style/header.css';
import InputComponent from './input-component';
import NavBar from './nav-bar';

const Header = () => {
    const navItems = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Services', link: '/services' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const cityNames = [
        'Madurai', 'Chennai', 'Bangalore', 'Mumbai', 
        'Delhi', 'Kolkata', 'Hyderabad', 'Pune', 
        'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow'
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredCities = cityNames.filter(city => 
        city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='header'>
            <h1>Climate <sup>-1</sup></h1>
            <NavBar arr={navItems} />
            <InputComponent 
                type='text' 
                holder='Search' 
                onChange={handleSearchChange}
            />
            {searchTerm && (
                <ul className="city-list">
                    {filteredCities.map((city, index) => (
                        <li key={index} onClick={() => setSearchTerm(city)}>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Header;
