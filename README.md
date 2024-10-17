# Climate - Weather Application

## Overview
Climate is a web application that provides real-time weather information using the OpenWeatherMap API. The application allows users to search for cities, view current weather data, and explore various weather-related services.

## Features
- User-friendly interface to search for weather by city.
- Displays current weather details, including temperature, humidity, wind speed, sunrise, and sunset times.
- Services section showcasing weather-related products similar to e-commerce platforms.
- Responsive design for optimal viewing on various devices.

## Tech Stack
- **Frontend:** React.js, CSS, PropTypes
- **Backend:** Node.js, Express.js, MongoDB (via Mongoose)
- **API:** OpenWeatherMap API for weather data
- **Environment Variables:** dotenv for managing sensitive data

## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local installation or MongoDB Atlas account)
- An API key from OpenWeatherMap

### Clone the repository
```bash
git clone https://github.com/SUDAR2005/Weather-App-React
cd climate-weather-app
```

### Install dependencies
```bash
npm install
```

### Setup Environment Variables
Create a `.env` file in the root of the project and add your MongoDB URI and OpenWeatherMap API key:
```
MONGODB_URI=your_mongodb_uri
OPENWEATHER_API_KEY=your_openweather_api_key
```

### Run the Application

#### Start the Backend
Navigate to the backend directory and start the server:
```bash
cd backend
node nosqlserver.js
```
The backend server will run on `http://localhost:8000`.

#### Start the Frontend
In a new terminal, navigate to the frontend directory and start the React application:
```bash
cd frontend
npm start
```
The frontend application will run on running 
```bash
npm run dev
```