import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/header";
import WeatherCard from "./component/weather-card";
createRoot(document.getElementById('header')).render(
    <StrictMode>
        <Header></Header>
    </StrictMode>
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <WeatherCard/>
    </StrictMode>
);