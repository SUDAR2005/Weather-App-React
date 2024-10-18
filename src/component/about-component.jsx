import React from 'react';
import '../style/about.css'; // External CSS for styling

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Our Website</h1>
                <p>
                    Welcome to <strong>Climate -1</strong>, your go-to destination for accurate 
                    and up-to-date weather forecasts. Our mission is to provide easy access 
                    to weather details for cities around the world.
                </p>
                <p>
                    With Climate -1, you can quickly search for cities, view real-time 
                    temperature, humidity, wind speed, and more. Whether you're planning 
                    a trip or just checking your local weather, we've got you covered!
                </p>
                <h2>Features</h2>
                <ul>
                    <li>Real-time weather information</li>
                    <li>Search cities for detailed forecasts</li>
                    <li>User-friendly interface with quick access</li>
                </ul>
                <p>
                    Stay tuned as we continue to expand our features and improve the 
                    user experience. Thank you for choosing Climate -1!
                </p>
            </div>
        </div>
    );
};

export default About;
